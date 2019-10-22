import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startGetPosts } from '../../Redux/actions/post';
import { startAuthenticate } from '../../Redux/actions/user';

// * COMPONENT IMPORTS
import IssuesCard from './IssuesCard';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const Issues = (props) => {

    const { 
        post,
        user,
        startAuthenticate,
        startGetPosts
     } = props

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!!post.response_data === false) {
            startGetPosts(!!token === true && token)
        }

        // * GRAB USER DATA (SELF)
        startAuthenticate()
    }, [post])

    // ! LOG DATA
    console.log(`ISSUES COMPONENT`, user)

    return (
        <style.section>
            <h2>Issues Component</h2>
            <Link to="/new-issue">New Issue</Link>

            {
                !!post.response_data === true && post.response_data.map((issue, key) => {
                    return <IssuesCard  key={key} issue={issue} user={user}/>
                })
            }
        </style.section>
    )
}

// * REDUX
const mapStateToProps = (state) => {
    return {
        post: state.post,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    startGetPosts: (data) => dispatch(startGetPosts(data)),
    startAuthenticate: (data) => dispatch(startAuthenticate(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Issues)