import React, { useState, useEffect} from 'react'
import axios from 'axios'
import JobCardList from '../Companies/JobCardList';
import SearchForm from '../SearchForm';
import JoblyApi from '../../api';
import LoadingSpinner from '../LoadingSpinner';

function Jobs() {
    // const [jobs, setJobs] = useState({data: null, error: false, loading: true})
    const [jobs, setJobs] = useState(null)

    useEffect(function getAllJobsOnMount(){
        search()
    }, [])

//   useEffect(() => {
//     axios
//         .get(`http://localhost:3001/jobs`) // TODO: abstract this axios call?
//         .then((res) => {
//             console.log(res.data.jobs)
//             setJobs({data: res.data.jobs, error: false, loading: false});
//         })
//         .catch((err) => {
//             console.log(err)
//             setJobs({data: null, error: true, loading: false});
//         })
//   }, []);
    async function search(title){
        let jobs = await JoblyApi.getJobs(title)
        setJobs(jobs)
    }

    if(!jobs) return <LoadingSpinner/>

    return (
        <div>
            <SearchForm searchFor={search}/>
            {jobs.length
                ? <JobCardList jobs={jobs}/>
                : <p>Sorry, no result were found</p>
            }
            {/* {jobs.loading === false ? (
                <>
                    {jobs.data.map(job => {
                        return(
                            <div key={job.id}>
                                <JobCardList jobs={job} />
                            </div>
                        )
                    })}
                </>
            ) : (
                <>
                    <p>Loading...</p>
                </>
            )} */}


        </div>
    )
}

export default Jobs
