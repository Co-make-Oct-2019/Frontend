import React from 'react';
// * STYLED COMPONENT IMPORT
import styled from 'styled-components';
// * APP COMPONENT IMPORT
import IssuesCard from '../Issues/IssuesCard.js';
import comake from '../images/comake.png';
import { Link } from 'react-router-dom';


const IssueCard = styled.div`
        background-color: black;
        border-radius: 20px;
        align: center;
        padding: 40px;
        color: white;
        margin: 0 auto;
        width: 600px;
     `

const Logo = styled.img`
  width: 50px;
  height: 50px;
  `

 const Row = styled.div`
            display: flex;
            flex-direction: row;
            margin: 30px;
            borer: 1px solid black;
            background-color: whitesmoke;
            padding: 20px;
            `
            const Column = styled.div`
            display: flex;
            flex-direction: column;
            width: 90%;
            margin-left: 20px;
            `

const ProfileCard = (props) => {
console.log(props);
    return (

        <div>  
          <Row>
              <Column>
              <h1>Co-Maker: </h1> 
              <h1>{props.profile.username}</h1>
              </Column>
                <p>{props.profile.imageurl} </p> 
                <img src={`${ props.profile.imageurl }`} alt={`${props.profile.description}`}/>
                  <Column>
              <h2> {props.profile.location} </h2>
              <h4>My Upvotes</h4>
              <h3>{props.profile.reputation}</h3>
              <p> Quote Me: {props.profile.description} </p>
              <Link to='/ProfileForm'>Edit Profile </Link>
              </Column>
            
           
        
          </Row>
          
            <div>
              {props.profile.userposts.map(item => {
                return(
                  <>
                  
                <IssueCard> 
                  <Logo src= {comake}></Logo>
                  <h2>My Posts</h2> 
                  <IssuesCard key={item.userpostid} issue={item}  />
                </IssueCard>
                </>
                )
                })}
            </div>
        </div>
    )
}

export default ProfileCard