import React from 'react';

const IssuesForm_Input = ({ handleChange, issue }) => (
    <>
        <input
            onChange={(e) => handleChange(e)}
            name="title"
            type="text"
            placeholder="Title"
            value={issue.title && issue.title}
            required
        />
        <input
            onChange={(e) => handleChange(e)}
            name="description"
            type="text"
            placeholder="Description"
            value={issue.description && issue.description}
            required
        />
        <input
            onChange={(e) => handleChange(e)}
            name="location"
            type="text"
            placeholder="Location"
            value={issue.location && issue.location}
            required
        />
        <input
            onChange={(e) => handleChange(e)}
            name="imageurl"
            type="text"
            placeholder="Img"
            value={issue.imageurl && issue.imageurl}
        />
    </>
)

export default IssuesForm_Input