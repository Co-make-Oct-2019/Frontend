import React, { useState, useEffect } from 'react';
import { startGetPosts } from '../../Redux/actions/post';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import ProfileCard from '../Profile/ProfileCard';
import IssuesCard from '../Issues/IssuesCard.js';
import style from './StyleComponent';


// ======= DASHBOARD COMPONENT ======// 

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
            <ProfileCard/>
       <div>
        {props.post.response_data && props.post.response_data.map( (issue, key) => {

            return (
                <div>
                <IssuesCard key={key} issue={issue}/>
                </div>
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