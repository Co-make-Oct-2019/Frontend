import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startGetPosts, startVoteUpdate } from '../../Redux/actions/post';
import { startAuthenticate } from '../../Redux/actions/user';
import axiosWithAuth from '../Utils/axiosWithAuth';

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
        startGetPosts,
        startVoteUpdate
    } = props

    useEffect(() => {
        // * RETREIVE ALL ISSUES
        startGetPosts()

        // * GRAB USER DATA (SELF)
        startAuthenticate()
    }, [])

    // ! LOG DATA
    console.log(`ISSUES COMPONENT`, user, location, match, history)

    // * HANDLEVOTE FOR VOTES
    const handleVote = (e, id) => {
        e.preventDefault();

        // ? DATA VARIRABLES
        const text = e.target.textContent.toLowerCase()
        const voteType = text === 'up vote' ? 'increment'
            : text === 'down vote' ? 'decrement'
                : console.log('ERROR VOTING')

        axiosWithAuth().put(`/posts/post/${voteType}/${id}`)
            .then(res => {
                // // ? URL INCLUDES '/issues'
                // match.url.includes('/issues') &&
                //     history.go('/issues')

                // // ? URL INCLUDES '/issue/'
                // match.url.includes('/issue/') &&
                //     history.go(`/issue/${id}`)
                console.log(startVoteUpdate)

                return startVoteUpdate(res.data, voteType)
            })
            .catch(err => console.log(err))

        console.log(text, voteType, id)
    }

    return (
        <style.section>
            <h2>Issues Component</h2>
            <Link to="/new-issue">New Issue</Link>

            {   // ? IF CHOSEN ID EXIST IN URL, FIND AND DISPLAY A ISSUE CARD === ISSUE_ID
                !!post.response_data === true && match.url.includes('/issue/') && post.response_data.filter(issue => issue.userpostid == match.params.id)
                    .map((item, key) => <IssuesCard key={key} issue={item} user={user} handleVote={handleVote} />)
            }

            {   // ? LIST ALL ISSUES IF URL IS '/issues'
                !!post.response_data === true && match.url.includes('/issues') && post.response_data.map(
                    (issue, key) => <Link to={`/issue/${issue.userpostid}`}><IssuesCard key={key} issue={issue} user={user} handleVote={handleVote} /></Link>
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
    startAuthenticate: (data) => dispatch(startAuthenticate(data)),
    startVoteUpdate: (data, type) => dispatch(startVoteUpdate(data, type))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Issues)