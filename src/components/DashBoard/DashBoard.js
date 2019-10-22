import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IssuesCard from '../Issues/IssuesCard.js';
import Navigation from '../Navigation';

// * STYLED COMPONENT IMPORT
import style from './StyleComponent';


// ======= DASHBOARD COMPONENT ======//
// === PULLS IN POSTS FROM USER'S CURRENT LOCATION ==// 

const DashBoard = ({ post }) => {

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!!post.response_data === false) {
            props.startGetPosts(!!token === true && token)
        }

        console.log(`ISSUES COMPONENT`, props)
    }, [post])


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
            <Navigation/>
        <section>
            <form>
                <style.input  type = 'text' onChange= {handleInputChange} value= {query} name='issues search' placeholder = 'search issues in your area'/>
               
            </form>
        </section>

       <div>
        {posts.map( (issue, key) => {
          
            return (
                <IssuesCard key={key} issue={issue} />
            )
            })}
       </div>
       </style.section>
    )
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

const mapDispatchToProps = (dispatch) => ({
    startGetPosts: (data) => dispatch(startGetPosts(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoard)
