
// * HOOKS
import React, { useState, useEffect } from 'react';
import { startGetPosts } from '../../Redux/actions/post';
import { connect } from 'react-redux';
// * APP COMPONENT IMPORT
import Navigation from './Navigation';
import ProfileCard from '../Profile/ProfileCard';
import IssuesCard from '../Issues/IssuesCard.js';
// * STYLE COMPONENT IMPORT
import style from './StyleComponent';

// TODOS //Make sure sign-in is working and user Dashboard is displaying - done! //
// Add a View All Posts Button
//Styling 

const DashBoard = (props) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!!post.response_data === false) {
            props.startGetPosts(!!token === true && token)
        }
    }, [])

    console.log(props)

    return ( 

        <style.section>

            <style.navbar><Navigation/></style.navbar>
           
            <div>
            {props.post.response_data 
            && props.post.response_data.map( (issue, key, description, location, imageurl, createdBy, createdDate) => {

                return (
                    <div>
                    <IssuesCard key={key} issue={issue} />
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