// * HOOKS
import React, { useEffect, useState, useRef } from 'react';
import { Link , Route , NavLink } from 'react-router-dom';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
// * APP COMPONENT IMPORT
import ProfileCard from './ProfileCard';
import axiosWithAuth from '../Utils/axiosWithAuth';
import styled from 'styled-components';
import comake from '../images/comake.png';
import { TweenMax } from "gsap";


// TODOS //  *component-header *NavLink *h2 *profile-card *button *main-section *info-section
// You might have to create a ProfileNav, a separate component entirely
// Add classNames to elements
// Styling



   
     
const Profile = (user) => {
    const [profile, setProfile] = useState();
    // const ProCard = useRef(null);
    console.log(user);
        useEffect(() => {
            axiosWithAuth().get('/users/getuserinfo')
            .then(response => {
                // console.log(response);
                return response && setProfile(response.data);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            })
    }, [])
    
    return (
        <>
      
        <style.Container>
        <style.Navit>
        <style.Row>
           <style.StyledLink to = '/dashboard' >DashBoard</style.StyledLink>
           <style.StyledLink to = '/tools' >Tools</style.StyledLink>
           <style.StyledLink to = '/new-issue'>Post an Issue</style.StyledLink>
        </style.Row>
        </style.Navit>
        <style.Navit >
        
            {profile && <ProfileCard profile={profile}/>}
        </style.Navit>
        </style.Container>
            
        </>
    )
}

export default Profile