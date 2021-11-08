import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import UserContext from './components/auth/UserContext'

function PrivateRoute({ exact, path, children }) {
    const {currentUser} = useContext(UserContext)

    console.debug(
        "PrivateRoute",
        "exact=", exact,
        "path=", path,
        "currentUser=", currentUser
    )

    if(!currentUser){
        return <Redirect to="/login" />
    }

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    )
}

export default PrivateRoute
