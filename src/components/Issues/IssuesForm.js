import React, { useState } from 'react';

// * STYLED COMPONENT IMPORT
import styled from './StyledComponents';

const IssuesForm = () => {

    const [post, setPost] = useState({ title: '', location: '', description: '', imageUrl:'',});

    const handleChange = event => {
        setPost({...post, [event.target.name]: event.target.value})
    }   

    const handleSubmit = event => {
       event.preventDefault();
       console.log(post.title);
       console.log(post.location);
       console.log(post.description);
       console.log(post.imageUrl);
    }
    

    return (
        <styled.div>
            <form onSubmit = {event => handleSubmit(event)}>
                <label>Title</label>
                    <input type='text' name = 'title' value = {post.title} onChange={event => handleChange(event)}></input>
                <label>Location</label>
                <input type='text' name = 'location' value = {post.location} onChange={event => handleChange(event)}></input>
                <label>Description</label>
                <input type='text' name = 'description' value = {post.description} onChange={event => handleChange(event)}></input>
                <label>Image</label>
                <input type='imageUrl' name = 'imageUrl' value = {post.imageUrl} onChange={event => handleChange(event)}></input>

                <button>Post</button>
            </form>
        </styled.div>
    )
}

export default IssuesForm


