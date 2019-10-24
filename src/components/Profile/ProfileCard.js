import React from 'react';
// * STYLED COMPONENT IMPORT
import styled from 'styled-components';
// * APP COMPONENT IMPORT
import IssuesCard from '../Issues/IssuesCard.js';


 // TODOS // 


 const Row = styled.div`
            display: flex;
            flex-direction: row;
            margin: 30px;
            borer: 1px solid black;
            `
            const Column = styled.div`
            display: flex;
            flex-direction: column;
            `

const ProfileCard = (props) => {
console.log(props);
    return (

        <div>  
          <Row>
          <p>{props.profile.imageurl} </p> 
          <img src={`${ props.profile.imageurl }`} alt={`${props.profile.description}`}/>
          <Column>
          <h1>CO-Maker: </h1> 
          <h1>{props.profile.username}</h1>
          <h2> {props.profile.location} </h2>
          <h4>Reputation</h4>
          <h3>{props.profile.reputation}</h3>
          </Column>

          </Row>
          <p> About Me: {props.profile.description} </p>
          
        

          <h2>My Posts</h2>
          
          <div>
            
            {props.profile.userposts.map(item => {
              return(
                <IssuesCard key={item.userpostid} issue={item}  />
              )

              //href to /post/post/item.userpostid
              })}
          </div>
        </div>
    )
}

export default ProfileCard