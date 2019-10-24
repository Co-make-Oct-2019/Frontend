
// * HOOKS
import React, { useState, useEffect } from 'react';
import { startGetPostsFromCurrentLocation } from '../../Redux/actions/post';
import { connect } from 'react-redux';
// * APP COMPONENT IMPORT
import Navigation from './Navigation';
import ProfileCard from '../Profile/ProfileCard.js';
import IssuesCard from '../Issues/IssuesCard.js';
// * STYLE COMPONENT IMPORT
import style from './StyleComponent';

// TODOS //Make sure sign-in is working and user Dashboard is displaying - done! //

//Styling 

const DashBoard = (props) => {

    const [post, setPost] = useState([]);
    const [profile, setProfile] = useState();

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
            startGetPostsFromCurrentLocation: (data) => dispatch(startGetPostsFromCurrentLocation(data))
        })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoard)