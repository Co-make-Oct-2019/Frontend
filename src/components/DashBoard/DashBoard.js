
// * HOOKS
import React, { useState, useEffect } from 'react';
import { startGetPosts } from '../../Redux/actions/post';
import { connect } from 'react-redux';
// * APP COMPONENT IMPORT
import Navigation from './Navigation';
import IssuesCard from '../Issues/IssuesCard.js';
import ProfileCard from '../Profile/ProfileCard';

// * STYLE COMPONENT IMPORT
import styled from 'styled-components';

// TODOS //Make sure sign-in is working and user Dashboard is displaying - done! //

//Styling 

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

    const [post, setPost] = useState([]);
    const [profile, setProfile] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!!post.response_data === false) {
            props.startGetPosts(!!token === true && token)
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
                        <IssuesCard key={key} issue={issue} description={description} />
                        </IssueCard>
                    )
                    })}
            </IssueBox>
       </PageBox>
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