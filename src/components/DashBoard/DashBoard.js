// * HOOKS
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../Utils/axiosWithAuth';
import { startGetPostsFromCurrentLocation, startVoteUpdateForDashboard } from '../../Redux/actions/post';
import { startAuthenticate } from '../../Redux/actions/user';
import { connect } from 'react-redux';
// * APP COMPONENT IMPORT
import Navigation from './Navigation';
import IssuesCard from '../Issues/IssuesCard.js';
// * STYLE IMPORTS
import styled from 'styled-components';
import style from './StyleComponent';

    


const DashBoard = (props) => {
    console.log(props);
    const [post, setPost] = useState([]);
    const [profile, setProfile] = useState();

    const {
        history,
        location,
        match,
        // post,
        user,
        startAuthenticate,
        // startGetPosts,
        startVoteUpdateForDashboard
    } = props

    const handleVote = (e, id) => {
        e.preventDefault();

        // ? DATA VARIRABLES
        const text = e.target.textContent.toLowerCase()
        const voteType = text === 'up vote' ? 'increment'
            : text === 'down vote' ? 'decrement'
                : console.log('ERROR VOTING')

        axiosWithAuth().put(`/posts/post/${voteType}/${id}`)
            .then(res => {
                return startVoteUpdateForDashboard(res.data, voteType)
            })
            .catch(err => console.log(err.response))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!!post.response_data === false) {
            props.startGetPostsFromCurrentLocation(!!token === true && token)
        }
    }, [])

    return ( 
        <style.PageBox>
            
            <style.Navit>
        <style.Row>
           <style.StyledLink to = '/profile' >Profile</style.StyledLink>
           <style.StyledLink to = '/tools' >Tools</style.StyledLink>
           <style.StyledLink to = '/new-issue'>Post an Issue</style.StyledLink>
        </style.Row>
        </style.Navit>
            <style.IssueBox>
                {props.post.response_data 
                && props.post.response_data.map( (issue, description,key) => {
                    return (
                        <style.IssueCard>
                        <IssuesCard key={key} issue={issue} />
                        </style.IssueCard>
                    )
                    })}
            </style.IssueBox>
       </style.PageBox>
    )
}
        const mapStateToProps = (state) => {
            return {
                post: state.post,
                user: state.user
            }
        }

        const mapDispatchToProps = (dispatch) => ({
            startGetPostsFromCurrentLocation: (data) => dispatch(startGetPostsFromCurrentLocation(data)),
            startVoteUpdateForDashboard: (data, type) => dispatch(startVoteUpdateForDashboard(data, type)),
            startAuthenticate: (data) => dispatch(startAuthenticate(data)),
        })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoard)