import React, {useContext, useState} from 'react'
import JoblyApi from '../api'
import Alert from './Alert'
import UserContext from './auth/UserContext'

function ProfileForm() {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [formErrors, setFormErrors] = useState([])
    const [saveConfirmed, setSaveConfirmed] = useState(false)
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: ""
    })

    function handleChange(evt){
        const {name, value} = evt.target
        setFormData(f => ({
            ...f,
            [name]: value
        }))
        setFormErrors([])
    }

    async function handleSubmit(evt){
        evt.preventDefault()

        let profileData = {
            firstName : formData.firstName,
            lastName : formData.lastName,
            email : formData.email,
            password : formData.password
        }

        let username = formData.username
        let updateUser

        try {
            updateUser = await JoblyApi.saveProfile(username, profileData)
        } catch (error) {
            debugger
            setFormErrors(error)
            return
        }

        setFormData(f => ({ ...f, password:""}))
        setFormErrors([])
        setSaveConfirmed(true)

        setCurrentUser(updateUser)
    }

    return (
        <div>
            <h3>Profile</h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <p className="form-control">{formData.username}</p>
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                name="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm password to make changes:</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {formErrors.length
                            ? <Alert type='danger' messages={formErrors}/>
                            : null}
                        
                        {saveConfirmed
                            ?
                            <Alert type="success" messages={["Updated Successfully"]} />
                            : null}

                        <button className="btn btn-primary btn-block" onClick={handleSubmit}>
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileForm
