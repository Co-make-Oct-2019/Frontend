import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Issues from '../Issues/Issues.js';

// * STYLED COMPONENT IMPORT
import style from './StyleComponent';


// ======= DASHBOARD COMPONENT ======//
// === PULLS IN POSTS FROM USER'S CURRENT LOCATION ==// 

const DashBoard = () => {

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState([]);

    useEffect(() => {
        axios
        .get('https://bw-co-make.herokuapp.com/posts/currentlocation?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D')
        .then (response => {
            console.log(response);
            setPosts(response);
        })
        .catch (error => {
            console.log('The data was not returned', error);
        })
    }, [posts])


    useEffect (() => {
        setSearch(
            posts.filter( item => 
                item.toLowerCase().includes(query()))
        )
    }, [query]);

    const handleInputChange = event => {
        setQuery(event.target.value);
    }

    return ( 
        <style.section>
        <section>
            <form>
                <style.input  type = 'text' onChange= {handleInputChange} value= {query} name='issues search' placeholder = 'search issues in your area'/>
               
            </form>
        </section>

       <div>
        {posts.map( issue => {
          
            return (
                <Issues key = {issue.id } title = {issue.title} detail = {issue.detail} timestamp = {issue.timestamp} />
            )
            })}
       </div>
       </style.section>
    )
}

export default DashBoard