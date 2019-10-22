import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startGetPosts } from '../../Redux/actions/post';

// * COMPONENT IMPORTS
import IssuesCard from './IssuesCard';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const Issues = (props) => {

    const { 
        post
     } = props

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!!post.response_data === false) {
            props.startGetPosts(!!token === true && token)
        }

        console.log(`ISSUES COMPONENT`, props)
    }, [post])

    return (
        <style.section>
            <h2>Issues Component</h2>
            <Link to="/new-issue">New Issue</Link>

            {
                !!post.response_data === true && post.response_data.map((issue, key) => {
                    return <IssuesCard  key={key} issue={issue} />
                })
            }
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
)(Issues)