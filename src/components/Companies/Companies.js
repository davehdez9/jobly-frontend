import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyCard from "./CompanyCard";
import SearchForm from "../SearchForm";
import JoblyApi from "../../api";
import LoadingSpinner from "../LoadingSpinner";
// import SearchForm from "../SearchForm";

function Companies() {
    // const [companies, setCompanies] = useState({data: null, error: false, loading: true})
    const [companies, setCompanies] = useState(null)

    useEffect(function getCompaniesOnMount(){
        search()
    }, [])

    async function search(name){
        let companies = await JoblyApi.getCompanies(name)
        setCompanies(companies)
    }

    if(!companies) return <LoadingSpinner/>


//   useEffect(() => {
//     axios
//         .get(`http://localhost:3001/companies`) // TODO: abstract this axios call?
//         .then((res) => {
//             setCompanies({data: res.data.companies, error: false, loading: false});
//         })
//         .catch((err) => {
//             console.log(err)
//             setCompanies({data: null, error: true, loading: false});
//         })
//   }, []);
    
    return (
        // TODO: Make the Search Functionality
        <div className="company-card">
            <SearchForm searchFor={search} />
            {/* {companies.loading === false ? companies.data.map((company) => {
                return(
                    <CompanyCard 
                        key={company.handle}
                        company={company}
                        handle={company.handle}
                        name={company.name}
                        description={company.description}
                    />
                )
            }) : null} */}
            {companies.length
                ? (
                    <div>
                        {companies.map(c => (
                            <CompanyCard
                                key={c.handle}
                                handle={c.handle}
                                name={c.name}
                                description={c.description}
                                logoUrl={c.logoUrl}
                            />
                        ))}
                    </div>
                ) : (
                    <p>Sorry, no results were found</p>
                )}
            {/* 
            TODO: ADD ERROR HANDLING TO REPLACE THE NULL IF THERE'S AN ISSUE.
            TODO: ADD ERROR HANDLING IF COMPANIES.DATA IS NULL 
            */}
        </div>
    );
}

export default Companies;
