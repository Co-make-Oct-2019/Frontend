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




const PageBox = styled.div`
   padding: 80px;
`
const IssueBox = styled.div`
   display: flex;
   flex-wrap: wrap;
   `
const Navit = styled.div`
   background-color: white;
   box-shadow: 3px 3px 3px black;
   height: 50px;
   border-radius: 10px;
   `
const Right = styled.div`
   display: flex;
   margin-left: 120px;
   `
const IssueCard = styled.div`
   background-color: black;
   border-radius: 20px;
   align: center;
   padding: 40px;
   color: white;
   margin: 20px;
   width: 100px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
    borer: 1px solid black;
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
            
            <Navit> 
                <Row>
                <h1>DashBoard</h1>
                <Right>
                <Navigation/>
                </Right>
                </Row>
             </Navit>
            <IssueBox>
                {props.post.response_data 
                && props.post.response_data.map( (issue, description,key) => {
                    return (
                        <IssueCard>
                        <IssuesCard key={key} issue={issue} />
                        </IssueCard>
                    )
                    })}
            </IssueBox>
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