import React, { useEffect } from 'react';
import axiosWithAuth from '../Utils/axiosWithAuth';
import { connect } from 'react-redux';
import { startCreatePost, startDeletePost, startUpdatePost } from '../../Redux/actions/post';
import { startAuthenticate } from '../../Redux/actions/user';

// * COMPONENT IMPORTS
import IssuesForm_Input from './IssuesForm_Input';
import IssuesCard from './IssuesCard';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const IssuesForm = ({
    history,
    post,
    user,
    startCreatePost,
    startDeletePost,
    startUpdatePost,
    startAuthenticate,
    location
}) => {

    // * ISSUE OBJ
    const issue = post.updated ? post.updated
    : location.state ? location.state.issue 
    : undefined;
    // * NEW RESPONSE
    const response = post.updated && post.updated
    // * PATHNAME DECIDES TYPE OF SUBMISSION
    const submitType = location.pathname === '/edit-issue' ? 'edit' : 'create'

    useEffect(() => {
        // * GRAB USER DATA (SELF)
        startAuthenticate()
    }, [])

    // * FORM LOGIC BELOW

    // ? INPUTS
    const handleChange = (e) => {
        e.preventDefault()
        startCreatePost({ [e.target.name]: e.target.value })
    }

    // ? DELETE
    const handleDelete = (e) => {
        e.preventDefault()

        if (e.target.textContent.toLowerCase() === 'delete') {
            startDeletePost({ userpostid: location.state && location.state.issue.userpostid })
            history.replace('/issues');
        }
    }

    const handleSubmit = (type, e) => {
        e.preventDefault(e)

            if ( // ? IF MULTIPLE REQUIRED FIELDS IS RECIEVED, CREATE POST
                type === 'create' &&
                !!post === true &&
                !!post.title === true &&
                !!post.location === true &&
                !!post.description === true
            ) {
                return axiosWithAuth().post('/posts/post', post)
                    .then(res => history.replace('/issues'))
                    .catch(err => console.log(err.response))
            } 

        // ? IF EDIT
        if (type === 'edit') post &&
            startUpdatePost({ ...post, userpostid: location.state.issue.userpostid })
    }

    // ! LOG DATA
    console.log(post, user, history, location, issue, response)

    return ( // * FORM FOR CREATING NEW ISSUES (POST)
        <>
            <style.form onSubmit={(e) => handleSubmit(submitType, e)}>

                {   // ? IF THE PATH IS TRUE, THEN RENDER UPDATE DATA
                    location.pathname === '/edit-issue' &&
                    <IssuesCard issue={!!response ? response : location.state.issue} />
                }

                {/* // * INPUT FIELDS
                 */} <IssuesForm_Input handleChange={handleChange} />

                {   // ? IF THE PATH IS TRUE, THEN RENDER UPDATE / SUBMIT BUTTON
                    location.pathname === '/edit-issue' ?
                        <button>Update</button> :
                        <button>Submit</button>
                }
            </style.form>

            {   // ? IF THE PATH IS TRUE, THEN RENDER DELETE BUTTON
                location.pathname === '/edit-issue' &&
                <button onClick={(e) => handleDelete(e)}>Delete</button>
            }
        </>
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
    startDeletePost: (data) => dispatch(startDeletePost(data)),
    startUpdatePost: (data) => dispatch(startUpdatePost(data)),
    startAuthenticate: (data) => dispatch(startAuthenticate(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IssuesForm)