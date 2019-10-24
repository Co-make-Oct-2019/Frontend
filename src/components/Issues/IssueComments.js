import React from 'react';
import moment from 'moment';

const IssueComments = ({ issue }) => {

    // ! LOG DATA
    // console.log('ISSUE COMMENTS COMPONENT', issue)

    return (
        <div className={`comment__container`}>
            <article>
                <img src={`${issue.imageurl}`} alt={`${issue.description}`}/>
                <h4>Username: {issue.user.username}</h4>
                <p>Location: {issue.user.location} </p>
                <p>Posted: {moment(issue.createdDate).add(10, 'days').calendar()}</p>
            </article>

            <aside>
                <dt>{issue.title}</dt>
                <dd>{issue.description}</dd>
            </aside>
        </div>
    )
}

export default IssueComments