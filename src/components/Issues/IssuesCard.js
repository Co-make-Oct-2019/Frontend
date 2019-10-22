import React from 'react';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const IssuesCard = ({ issue }) => {

    console.log(issue)

    return (
        <style.card_div className={`issues-card__container`}>
            <h3>{issue.title}</h3>
            <img src={`${issue.imageurl}`} alt={`${issue.description}`}/>
            <p> Upvotes: {issue.count} </p>
            <p> Description: {issue.description} </p>
            <p> Location: {issue.location} </p>
            <p> Id:{issue.userpostid} </p>
            <p> Voted: {JSON.stringify(issue.voted)} </p>
            <p> Created by: {issue.createdBy} </p>

            <span>{issue.createdDate}</span>
            <span>{issue.lastModifiedBy}</span>
            <span>{issue.lastModifiedDate}</span>
        </style.card_div>
    )
}

export default IssuesCard