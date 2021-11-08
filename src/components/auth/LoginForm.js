import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Alert from '../Alert'

function LoginForm({ login }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [formErrors, setFormErrors] =useState([])

    console.debug(
        "LoginForm",
        "login=", typeof login,
        "formData=", formData,
        "formErrors", formErrors,
    )

    async function handleSubmit(evt){
        evt.preventDefault()
        let result = await login(formData)
        if(result.success){
            history.push("/companies")
        } else {
            setFormErrors(result.errors)
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target
        setFormData(l => ({...l, [name]: value }))
    }



    return (
        <div className="container">
            <h3>Login</h3>

            <div className="card">
                <div className="card-body">
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            className="form-control" 
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete="username"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password"
                            className="form-control" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    {formErrors.length
                        ? <Alert type="danger" messages={formErrors}/>
                        : null}
                    
                    <button 
                        className="btn btn-primary"
                        onSubmit={handleSubmit}
                    >Submit</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
