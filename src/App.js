import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import NavigationBar from './NavigationBar'
import Routes from './Routes';
import UserContext from './components/auth/UserContext';
import JoblyApi from './api'
import jwt from 'jsonwebtoken'
import LoadingSpinner from './components/LoadingSpinner'
import userLocalStorage from './hooks/useLocalStorage';

export const TOKE_STORAGE_ID = "jobly-token"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [applicationIds, setApplicationIds] = useState(new Set([]))
  const [token, setToken] = userLocalStorage(TOKE_STORAGE_ID)
  const [infoLoaded, setInfoLoaded] = useState(false)

  console.debug(
    "App", 
    "infdLoades", infoLoaded, 
    "currentUser", currentUser, 
    "token", token
  )

  useEffect(function loadUserInfo(){
    console.debug("App useEffect loadUserInfo", "token=", token)

    async function getCurrentUser(){
      if(token){
        try {
          let { username } = jwt.decode(token)
          JoblyApi.token = token
          let currentUser = await JoblyApi.getCurrentUser(username)
          setCurrentUser(currentUser)
          setApplicationIds(new Set(currentUser.applications))
        } catch (error) {
          console.error("App loaderUserInfo: Problem Loading", error)
          setCurrentUser(null)
        }
      }
      setInfoLoaded(true)
    }

    setInfoLoaded(false)
    getCurrentUser()
  }, [token])

  function hasAppliedToJob(id){
    return applicationIds.has(id)
  }

  function applyToJob(id){
    if(hasAppliedToJob(id)) return 
    JoblyApi.applyToJob(currentUser.username, id)
    setApplicationIds(new Set([...applicationIds, id]))
  }

  function logout(){
    setCurrentUser(null)
    setToken(null)
  }

  async function login(loginData){
    try {
      let token = await JoblyApi.login(loginData)
      setToken(token)
      return { success: true }
    } catch (error) {
      console.error("Login failed", error)
      return { success: false, error }
    }
  }

  async function signup(signupData){
    try {
      let token = await JoblyApi.signup(signupData)
      setToken(token)
      return { success: true }  
    } catch (error) {
      console.error("SignUp Failed", error)
      return { success: false, error}
    }
    
  }

  if (!infoLoaded) return <LoadingSpinner />

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
        <div className="App">
          <NavigationBar logout={logout}/>
          <Routes login={login} signup={signup}/>
        </div>  
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
