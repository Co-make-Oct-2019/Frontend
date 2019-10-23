import React, { useState } from 'react';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const SearchIssues = ({ setSearched, issues }) => {

    // * INPUT STATE
    const [input, setInput] = useState({ search: "" })

    // ! LOG DATA
    // console.log('SEARCH ISSUES COMPONENT', issues)

    // * LOGIC HANDLERS BELOW
    const handleChange = (e) => {
        e.preventDefault()

        setInput({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newIssues = () => issues.filter(issue => issue.location === input.search)
        setSearched(newIssues())
    }

    return (
        <style.formSearch onSubmit={(e) => handleSubmit(e)}>
            <label>Search</label>
            <input onChange={(e) => handleChange(e)} name="search" type="text" />
        </style.formSearch>
    )
}

export default SearchIssues