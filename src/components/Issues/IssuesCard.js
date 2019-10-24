import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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

                        {   // ? IMG DOES NOT CONTAIN A .COM, RANDOMIZE PLACEHOLDER IMG
                            issue.imageurl &&
                                !!issue.imageurl.includes('.com') ?
                                <img src={`${issue.imageurl}`} alt={`${issue.description}`} /> :
                                <img src={`https://picsum.photos/300/300`} alt={`${issue.description}`} />
                        }

                        <div className={`issue-card__info`}>
                            <p>Description: {issue.description}</p>
                            <p>Upvotes: {issue.count}</p>
                            <p>Location: {issue.location}</p>
                            <p>Created by: {issue.createdBy}</p>

                            <span>Created By: {moment(issue.createdDate).add(10, 'days').calendar()}</span>
                            <span>Last Updated: {moment(issue.lastModifiedDate).add(10, 'days').calendar()}</span>
                        </div>
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

            {path('/issue/') &&
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