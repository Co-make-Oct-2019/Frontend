import React from 'react';
import { Link } from 'react-router-dom';

// * COMPONENT IMPORTS
import IssueComments from './IssueComments';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const IssuesCard = ({ issue, user, handleVote, history }) => {

    // ! LOG DATA

    const forward = (e) => {
        e.preventDefault()
        history.replace(`/issue/${issue.userpostid}`)
    }

    const path = url => history && history.location.pathname.includes(url)

    return (
        <style.card_div>
            <div className={`issue-card__content`} onClick={(e) => path('/issues') && forward(e)}>
                <article>
                    <h3>{issue.title}</h3>

                    <div className={`issue-card__issue`}>
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
                    </div>

                </article>

                { // ? IF USER ID IS EQUAL TO POST ID, RENDER LINK FOR EDIT
                    user && user.userid === issue.user.userid && (<Link to={{
                        pathname: "/edit-issue",
                        state: {
                            issue: issue
                        }
                    }}>Edit</Link>)
                }
            </div>

            <button onClick={(e) => handleVote(e, issue.userpostid)}>Up vote</button>
            <button onClick={(e) => handleVote(e, issue.userpostid)}>Down vote</button>

            { path('/issue/') &&
                <div className="issue-comments__container">
                    <h3>Comments: </h3>

                    {
                        path('/issue/') &&
                        !!issue &&
                        !!issue.postcomments &&
                        issue.postcomments.map((post, key) => {
                            return <IssueComments key={key} issue={post} />
                        })
                    }
                </div>
            }

        </style.card_div>
    )
}

export default IssuesCard