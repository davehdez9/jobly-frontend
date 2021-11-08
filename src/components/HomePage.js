import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './auth/UserContext'

function HomePage() {
    const {currentUser} = useContext(UserContext)
    return (
        <div>
            <div className="container text-center">
                <h1>Jobly</h1>
                <p>All the jobs in one convinient place</p>
                {currentUser 
                    ? <h2>
                        Welcome Back, {currentUser.firstName || currentUser.username}!
                    </h2>
                    : (
                        <p>
                            <Link className="btn btn-primary" to="/login">Log In</Link>
                            <Link className="btn btn-primary" to="/signup">Sign Up</Link>
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default HomePage
