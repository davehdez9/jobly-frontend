import React, { useState, useEffect } from "react";
import axios from "axios";
import JoblyApi from "../api";

function SearchForm({searchFor}) {
    const [searchTerm, setSearchTerm] = useState("")


  /*
    in the school's example:
    searchFor is prop that calls the search(name) function

    in our example:
    searchFor is a prop represents companies.data

    companies.data = null

    companies.data will be undefined until the Companies component loads
    every time Companies component loads, companies.data will have data

    example of companies.data:
    {
        company data
    }

    we need a way to be able to "call a function" that will accept a parameter, and will make an axios call to get companies using that parameter
    */

    function handleSubmit(evt){
        evt.preventDefault()
        searchFor(searchTerm.trim() || undefined)
        setSearchTerm(searchTerm.trim())
        console.log(searchTerm)
    }

    function handleChange(evt) {
        setSearchTerm(evt.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="searchTerm"
                    placeholder="Enter search term"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchForm
