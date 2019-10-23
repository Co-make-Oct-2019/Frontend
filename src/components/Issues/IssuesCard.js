import React from 'react';
import { Link } from 'react-router-dom';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const IssuesCard = ({ issue, user }) => {

    // ! LOG DATA
    console.log(issue, user)

    return (
        <style.card_div className={`issues-card__container`}>
                <article>
                    <h3>{issue.title}</h3>
                    <img src={`${issue.imageurl}`} alt={`${issue.description}`} />
                    <p> Upvotes: {issue.count} </p>
                    <p> Description: {issue.description} </p>
                    <p> Location: {issue.location} </p>
                    <p> Id:{issue.userpostid} </p>
                    <p> Voted: {JSON.stringify(issue.voted)} </p>
                    <p> Created by: {issue.createdBy} </p>
    
                    <span>{issue.createdDate}</span>
                    <span>{issue.lastModifiedBy}</span>
                    <span>{issue.lastModifiedDate}</span>
                </article>

            { // ? IF USER ID IS EQUAL TO POST ID, RENDER LINK FOR EDIT
                user && user.userid === issue.user.userid && (<Link to={{
                    pathname: "/edit-issue",
                    state: {
                        issue: issue
                    }
                }}>Edit</Link>)
            }
        </style.card_div>
    )
}

export default IssuesCard