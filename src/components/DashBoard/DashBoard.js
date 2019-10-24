
// * HOOKS
import React, { useState, useEffect } from 'react';
import { startGetPosts } from '../../Redux/actions/post';
import { connect } from 'react-redux';
// * APP COMPONENT IMPORT
import Navigation from './Navigation';
import IssuesCard from '../Issues/IssuesCard.js';
// * STYLE COMPONENT IMPORT
import styled from 'styled-components';

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