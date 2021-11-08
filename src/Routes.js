import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './components/HomePage'
import Companies from './components/Companies/Companies'
import CompanyJobs from './components/Companies/CompanyJobs'
import Jobs from './components/Jobs/Jobs'
import LoginForm from './components/auth/LoginForm'
import SignUpForm from './components/auth/SignUpForm'
import PrivateRoute from './PrivateRoute'
import ProfileForm from './components/ProfileForm'



function Routes({login, signup}) {
    console.debug(
        "Routes", 
        `login=${typeof login}`, 
        `register=${typeof register}`
    )
    return (
        <div>
            <Switch>

                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/login'>
                    <LoginForm login={login}/>
                </Route>

                <Route exact path='/signup'>
                    <SignUpForm signup={signup}/>
                </Route>

                <PrivateRoute exact path='/companies'>
                    <Companies />
                </PrivateRoute>

                <PrivateRoute exact path='/jobs'>
                    <Jobs />
                </PrivateRoute>

                <PrivateRoute exact path='/companies/:handle'>
                    <CompanyJobs />
                </PrivateRoute>
                
                <PrivateRoute exact path='/profile'>
                    <ProfileForm/>
                </PrivateRoute>
                
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes
