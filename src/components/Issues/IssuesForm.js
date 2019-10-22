import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startCreatePost } from '../../Redux/actions/post';
import { startAuthenticate } from '../../Redux/actions/user';

// * COMPONENT IMPORTS
import IssuesForm_Input from './IssuesForm_Input';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const IssuesForm = ({
    post,
    user,
    startCreatePost,
    startAuthenticate,
    history,
    location
}) => {

    // TODO COMPLETE UPDATE FUNCTIONALITY

    useEffect(() => {
        // * GRAB USER DATA (SELF)
        startAuthenticate()
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        startCreatePost({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        startCreatePost(post && post)
    }

    // ! LOG DATA
    console.log(post, user, history, location)

    return ( // * FORM FOR CREATING NEW ISSUES (POST)
        <style.form onSubmit={(e) => handleSubmit(e)}>

            {/* // * INPUT FIELDS
             */} <IssuesForm_Input
                handleChange={handleChange}
                issue={location.state && location.state.issue} 
                />

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
    startAuthenticate: (data) => dispatch(startAuthenticate(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(IssuesForm)