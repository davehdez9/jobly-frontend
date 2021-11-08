import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Alert from '../Alert'

function SignUpForm({signup}) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        email:""
    })
    const [formErrors, setFormErrors] = useState([])

    const [userErrors, setUserErrors] = useState(false)

    console.debug(
        "SignupForm",
        "signup", typeof signup,
        "formData", formData,
        "formErrors", formErrors
    )

    async function handleSubmit(evt){
        evt.preventDefault()
        let result = await signup(formData)
        if(result.success){
            history.push("/companies")
        } else {
            setFormErrors(result.errors)
            setUserErrors(true)
        }
    }

    function handleChange(evt){
        const {name, value} = evt.target
        setFormData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className="container col-md-6 ">
            {userErrors === false ? 
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>

                        <div className='form-group'>
                            <label>Username</label>
                            <input 
                                name="username"
                                className="form-control"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label>Password</label>
                            <input 
                                name="password" 
                                className="form-control"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label>First Name</label>
                            <input 
                                name="firstName" 
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label>Last Name</label>
                            <input 
                                name="lastName" 
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label>Email</label>
                            <input 
                                name="email" 
                                className="form-control"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* {formErrors.length
                            ? <Alert type="danger" messages={formErrors}/>    
                            : null
                        } */}

                        <button
                            type='submit'
                            className='btn btn-primary'
                            onSubmit={handleSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div> :  
            <div>
                <p>Invalid data submitted, please try again.</p>
                {/* <button onClick={() => history.push('/')}>Sign Up</button> */}
            </div>
}


    
        </div>
    )
}

export default SignUpForm
