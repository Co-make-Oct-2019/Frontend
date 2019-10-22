import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IssuesCard from '../Issues/IssuesCard.js';
import Navigation from '../Navigation';
import { startGetPosts } from '../../Redux/actions/post';

// * STYLED COMPONENT IMPORT
import style from './StyleComponent';


// ======= DASHBOARD COMPONENT ======//
// === PULLS IN POSTS FROM USER'S CURRENT LOCATION ==// 

const DashBoard = (props) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!!post.response_data === false) {
            props.startGetPosts(!!token === true && token)
        }

        console.log(`ISSUES COMPONENT`, props)
    }, [])

    console.log(props.post);

    return ( 
        
        <style.section>
            <Navigation/>
            
       <div>
        {props.post.response_data && props.post.response_data.map( (issue, key) => {
          
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