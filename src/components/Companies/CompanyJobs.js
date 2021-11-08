import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import JobCardList from './JobCardList'

function CompanyJobs() {    
    const { handle } = useParams()
    const [company, setCompany] = useState({data: null, error: false, loading: true})

    useEffect(() => {
        axios.get(`http://localhost:3001/companies/${handle}`)
            .then((res) => {
                setCompany({data: res.data.company, error: false, loading: false});

            })
            .catch((err) => {
                console.log(err)
                setCompany({data: null, error: true, loading: false});
            })
    }, [handle])


    return (
        <div>
            {company.loading === false ? (
                <>
                    <h2>{company.data.name}</h2>
                    <p>{company.data.description}</p>

                    {company.data.jobs.map(c => {
                        return(
                            <div key={c.id}>
                                <JobCardList jobs={c} />
                            </div>
                        )
                    })}
                </>
            ) : (
                <>
                    <p>Loading...</p>
                </>
            )}
           

        </div>

    )
}

export default CompanyJobs
