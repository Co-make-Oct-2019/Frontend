import React from 'react';
import { connect } from 'react-redux';
import { startCreatePost } from '../../Redux/actions/post';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const IssuesForm = ({ post, startCreatePost }) => {

    const handleChange = (e) => {
        e.preventDefault()
        startCreatePost({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        startCreatePost(post && post)
    }

    // ! LOG DATA
    // console.log(post)

    return ( // * FORM FOR CREATING NEW ISSUES (POST)
        <style.form onSubmit={(e) => handleSubmit(e)}>
            <input
                onChange={(e) => handleChange(e)}
                name="title"
                type="text"
                placeholder="Title"
                required
            />
            <input
                onChange={(e) => handleChange(e)}
                name="description"
                type="text"
                placeholder="Description"
                required
            />
            <input
                onChange={(e) => handleChange(e)}
                name="location"
                type="text"
                placeholder="Location"
                required
            />
            <input
                onChange={(e) => handleChange(e)}
                name="imageurl"
                type="text"
                placeholder="Img"
            />

            <button>Submit</button>
        </style.form>
    )
}

// * REDUX
const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

const mapDispatchToProps = (dispatch) => ({
    startCreatePost: (data) => dispatch(startCreatePost(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(IssuesForm)