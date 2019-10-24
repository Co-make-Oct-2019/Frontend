
// * HOOKS
import React, { useState, useEffect } from 'react';
import { startGetPostsFromCurrentLocation, startVoteUpdateForDashboard } from '../../Redux/actions/post';
import { startAuthenticate } from '../../Redux/actions/user';

import { connect } from 'react-redux';
// * APP COMPONENT IMPORT
import Navigation from './Navigation';
import IssuesCard from '../Issues/IssuesCard.js';

// * STYLE IMPORTS
import styled from 'styled-imports';

import axiosWithAuth from '../Utils/axiosWithAuth';

// TODOS //Make sure sign-in is working and user Dashboard is displaying - done! //

//Styling 

const PageBox = styled.div`
    padding: 30px;
`

const Navit = styled.div`   

    background-color: white;
    box-shadow: 3px 3px 3px black;
    height: 100px;
    border-radius: 10px;
    `

const IssueCard = styled.div`
    background-color: black;
    border-radius: 20px;
    item-align: center;
    padding: 40px;
    color: white;
    margin: 30px;
`


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
        <PageBox>
            <Navit> <Navigation/> </Navit>
            <section>
                {props.post.response_data 
                && props.post.response_data.map( (issue, description,key) => {
                    return (
                        <IssueCard>
                        <IssuesCard key={key} issue={issue} description={description} />
                        </IssueCard>
                    )
                    })}
            </section>
       </PageBox>
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