import React from 'react';

const IssuesForm_Input = ({ handleChange }) => (
    <>
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
    </>
)

export default IssuesForm_Input