import React from 'react';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
// * APP COMPONENT IMPORT

 // TODOS // 
  // Add the User reputation information to this card


const ProfileCard = (props) => {

    return (

          <div>  
            <h3>Name: {props.name}</h3>
            <p>Photo:{props.imageurl && <img src={`${ props.imageurl }`} alt={`${props.description}`}/>}</p>
            <p> Description: {props.description} </p>
            <p> Location: {props.location} </p> 
            </div>
    )
}

export default ProfileCard