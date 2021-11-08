import React, {useContext, useState, useEffect} from 'react'
import UserContext from '../auth/UserContext'

function JobCard({id, title, salary, equity, companyName }) {
    const [applied, setApplied] = useState()
    const {hasAppliedToJob, applyToJob } = useContext(UserContext)

    let jobSalary = salary === null ? 'No salary provided' : `$${parseFloat(salary).toFixed(2)}`
    // TODO: update salary format to add commas for the thousandth places

   React.useEffect(function updateAppliedStatus(){
        setApplied(hasAppliedToJob(id))
    }, [id, hasAppliedToJob])

    async function handleApply(evt){
        if(hasAppliedToJob(id)) return 
        applyToJob(id)
        setApplied(true)
    }

    return (
        <div className="company-card-content job-card" style={{
            border: "1px solid lightgray",
            margin: "20px",
            padding: "15px",
            textAlign: "left",
            boxShadow: "0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)",
        }}> {applied}
            <p><strong>{title}</strong></p>
            <p>{companyName}</p>
            <p>Salary: {jobSalary.toLocaleString()}</p>
            <p>Equity: {equity*100}%</p>
            <button 
                className="btn btn-danger"
                onClick={handleApply}
                disabled={applied}
            >
                {applied ? "Applied" : "Apply"}
            </button>
        </div>
    )
}

export default JobCard
