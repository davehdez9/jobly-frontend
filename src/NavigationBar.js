import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavigationBar.css'

function NavigationBar() {
    return (
        <div>
            <nav className="NavBar">
                <NavLink exact to="/">Jobly</NavLink>
                <NavLink exact to="/companies">Companies</NavLink>
                <NavLink exact to="/companies/:job">Company Details</NavLink>
                <NavLink exact to="/jobs">Jobs</NavLink>
                <NavLink exact to="/profile">Profile</NavLink>
                <NavLink exact to="/signup">SigUp</NavLink>
                <NavLink exact to="/login">Login</NavLink>
                <NavLink exact to="/logout">Logout</NavLink>
            </nav>            
        </div>
    )
}

export default NavigationBar
