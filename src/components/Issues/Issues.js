import React, { useState , useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

// * STYLED COMPONENT IMPORT
 import styled from './StyledComponents';



const Issues = (rops) => {


const [issue, setIssue] = useState([]);
useEffect(() => {
    axios
    .get('https://bw-co-make.herokuapp.com/posts/currentlocation?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D')
    .then (response => {
        console.log(response);
        setIssue(response);
    })
    .catch (error => {
        console.log('The data was not returned', error);
    })
}, [issue])

    return (
        <div>
            <h2>Issues Component</h2>
            <div>{issue.title}</div>
            <div>{issue.createdBy}</div>
            <div>{issue.createdDate}</div>
            <div>{issue.description}</div>
            <div>{issue.imageurl}</div>
            <div>{issue.lastModifiedBy}</div>
            <div>{issue.lastModifiedDate}</div>
            <div>{issue.location}</div>
        </div>

    )
}

export default Issues