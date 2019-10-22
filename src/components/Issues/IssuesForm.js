import React from 'react';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const IssuesForm = () => {

    return (
        <style.form>
            <input type="text" placeholder="Title" required />
            <input type="text" placeholder="Description" required />
            <input type="text" placeholder="Location" required />
            <input type="text" placeholder="Img"/>

            <button>Submit</button>
        </style.form>
    )
}

export default IssuesForm