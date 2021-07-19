import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    HomePage
                </Route>
                <Route exact path='/companies'>
                    Companies
                </Route>
                <Route exact path='/companies/:job'>
                    Company Details
                </Route>

                <Route exact path='/jobs'>
                    Jobs
                </Route>
                <Route exact path='/profile'>
                    Profile
                </Route>
                <Route exact path='/signup'>
                    SignUp
                </Route>
                <Route exact path='/login'>
                    Login
                </Route>
                <Route exact path='/logout'>
                    Logout
                </Route>
 
            </Switch>
        </div>
    )
}

export default Routes
