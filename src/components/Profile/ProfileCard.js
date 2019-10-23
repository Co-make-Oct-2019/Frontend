import React from 'react';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const ProfileCard = (props) => {

    // ! LOG DATA
  console.log(props)

    return (
        // <style.card_div className={`profile-card__container`}>
          <div>  
            <h3>Name: {props.name}</h3>
            <p>Photo:{props.imageurl && <img src={`${ props.imageurl }`} alt={`${props.description}`}/>}</p>
            <p> Description: {props.description} </p>
            <p> Location: {props.location} </p> 
            </div>
       
        // {/* </style.card_div> */}
    )
}

export default ProfileCard