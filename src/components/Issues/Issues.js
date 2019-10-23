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
        history,
        location,
        match,
        post,
        user,
        startAuthenticate,
        startGetPosts
    } = props

    useEffect(() => {
        // * RETREIVE ALL ISSUES
        startGetPosts()

        // * GRAB USER DATA (SELF)
        startAuthenticate()
    }, [])

    // ! LOG DATA
    console.log(`ISSUES COMPONENT`, user, location, match, history)

    return (
        <style.section>
            <h2>Issues Component</h2>
            <Link to="/new-issue">New Issue</Link>

            {   // ? IF CHOSEN ID EXIST IN URL, FIND AND DISPLAY A ISSUE CARD === ISSUE_ID
                !!post.response_data === true && match.url.includes('/issue/') && post.response_data.filter(issue => issue.userpostid == match.params.id)
                .map(item => <IssuesCard issue={item} user={user}/>)
            }

            {   // ? LIST ALL ISSUES IF URL IS '/issues'
                !!post.response_data === true && match.url.includes('/issues') && post.response_data.map(
                    (issue, key) => <Link to={`/issue/${issue.userpostid}`}><IssuesCard key={key} issue={issue} user={user} /></Link>
                )
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