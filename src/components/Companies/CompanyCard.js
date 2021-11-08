import React from 'react'
import { Link } from 'react-router-dom'

function CompanyCard({name, description, handle}) {
    return (
        <Link to={`/companies/${handle}`} className="company-card-content">
            <div
            className="company-card"
            style={{
                border: "1px solid lightgray",
                margin: "20px",
                padding: "15px",
                textAlign: "left",
                boxShadow: "0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)",
            }}>
            <div className="company-card-content">
                <div >
                    <p>
                    <strong>{name}</strong>
                    </p>
                    <span>💼</span>
                </div>
                <p>{description}</p>
                </div>
            </div>      
        </Link>
    )
}

export default CompanyCard
