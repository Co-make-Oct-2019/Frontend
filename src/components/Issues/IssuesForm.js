import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startCreatePost, startUpdatePost } from '../../Redux/actions/post';
import { startAuthenticate } from '../../Redux/actions/user';

// * COMPONENT IMPORTS
import IssuesForm_Input from './IssuesForm_Input';
import IssuesCard from './IssuesCard';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

    const IssuesForm = ({
        post,
        startCreatePost,
        startUpdatePost,
        startAuthenticate,
        location
    }) => {

    // * ISSUE OBJ
    const issue = !!post.response_data ? post.response_data.post : location.state.issue;
    // * NEW RESPONSE
    const response = post.response_data && post.response_data.post
    // * PATHNAME DECIDES TYPE OF SUBMISSION
    const submitType = location.pathname === '/edit-issue' ? 'edit' : 'create'

    useEffect(() => {
        // * GRAB USER DATA (SELF)
        startAuthenticate()
    }, [])

    // * FORM LOGIC BELOW
    const handleChange = (e) => {
        e.preventDefault()
        startCreatePost({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (type, e) => {
        e.preventDefault(e)
        if (type === 'create') startCreatePost(post && post)
        if (type === 'edit') post && startUpdatePost({ ...post, userpostid: issue.userpostid })
    }

    // ! LOG DATA
    // console.log(post, user, history, location)

    return ( // * FORM FOR CREATING NEW ISSUES (POST)
        <style.form onSubmit={(e) => handleSubmit(submitType, e)}>

            {   // ? IF THE PATH IS TRUE, THEN RENDER UPDATE DATA
                location.pathname === '/edit-issue' &&
                <IssuesCard issue={!!response ? response: location.state.issue} />
            }

            {/* // * INPUT FIELDS
             */} <IssuesForm_Input handleChange={handleChange} />

            {   // ? IF THE PATH IS TRUE, THEN RENDER UPDATE / SUBMIT BUTTON
                location.pathname === '/edit-issue' ?
                    <button>Update</button> :
                    <button>Submit</button>
            }

            {   // ? IF THE PATH IS TRUE, THEN RENDER DELETE BUTTON
                location.pathname === '/edit-issue' &&
                <button>Delete</button>
            }
        </style.form>
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
    startCreatePost: (data) => dispatch(startCreatePost(data)),
    startUpdatePost: (data) => dispatch(startUpdatePost(data)),
    startAuthenticate: (data) => dispatch(startAuthenticate(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IssuesForm)