import React from 'react';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
// * APP COMPONENT IMPORT

 // TODOS // 
  // Add the User reputation information to this card - Read the data asshole 


const ProfileCard = (props) => {
console.log(props);
    return (

        <div>  
          <h3>Name: {props.profile.username}</h3>
          <p>Photo:{props.profile.imageurl} <img src={`${ props.profile.imageurl }`} alt={`${props.profile.description}`}/>}</p>
          <p> Description: {props.profile.description} </p>
          <p> Location: {props.profile.location} </p> 
          <p> Reputation: {props.profile.reputation}</p>
          
          <div>
            <h2>My Posts</h2>
            {props.profile.userposts.map(item => {
              return(
              <p key={item.index}></p>
              )
              })}
          </div>
        </div>
    )
}

export default ProfileCard