
// * HOOKS
import React, { useState, useEffect } from 'react';
import { startGetPostsFromCurrentLocation, startVoteUpdateForDashboard } from '../../Redux/actions/post';
import { startAuthenticate } from '../../Redux/actions/user';

import { connect } from 'react-redux';
// * APP COMPONENT IMPORT
import Navigation from './Navigation';
import ProfileCard from '../Profile/ProfileCard.js';
import IssuesCard from '../Issues/IssuesCard.js';
// * STYLE COMPONENT IMPORT
import style from './StyleComponent';
import axiosWithAuth from '../Utils/axiosWithAuth';

// TODOS //Make sure sign-in is working and user Dashboard is displaying - done! //

//Styling 

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

    console.log(props)

    return ( 

        <style.section>

            <style.navbar>
                <Navigation/>
                {/* <ProfileCard profile={profile}/> */}
                </style.navbar>
        
            <div className='card'>



            {props.post.response_data 
            && props.post.response_data.map( (issue, key) => {

                return (
                    <div>
                    <IssuesCard key={key} issue={issue} user={user} handleVote={handleVote} history={history} />
                    </div>
                )
                })}
            </div>
       </style.section>
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