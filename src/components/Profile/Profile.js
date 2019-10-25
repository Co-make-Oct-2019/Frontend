// * HOOKS
import React, { useEffect, useState } from 'react';
import { Link , Route , NavLink } from 'react-router-dom';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
// * APP COMPONENT IMPORT
import ProfileCard from './ProfileCard';
import axiosWithAuth from '../Utils/axiosWithAuth';
import styled from 'styled-components';
import comake from '../images/comake.png';


// TODOS //  *component-header *NavLink *h2 *profile-card *button *main-section *info-section
// You might have to create a ProfileNav, a separate component entirely
// Add classNames to elements
// Styling

    const Container = styled.div`
        margin: 0;
        padding-top: 30px;
        background-color: whitesmoke;
        `
    const Navit = styled.div`  
        margin: 0 auto;
        margin-top: 50px;
        background-color: white;
        box-shadow: 3px 10px 3px grey;
        width: 70%;
        border-radius: 5px;
        padding: 15px;
        `
    const Right = styled.div`
        text-align: right;
        `    
    const StyledLink = styled(Link)`
        color: #3CB371;
        font-family: Russo-One;
        font-size: 20px;
        margin: 15px;
        `;
   

    const Row = styled.div`
        display: flex;
        flex-direction: row;
        borer: 1px solid black;
        `

   
     
const Profile = (user) => {
    const [profile, setProfile] = useState();

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
      
        <Container>
        <Navit>
        <Row>
           <StyledLink to = '/dashboard' >DashBoard</StyledLink>
           <StyledLink to = '/tools' >Tools</StyledLink>
           <StyledLink to = '/new-issue'>Post an Issue</StyledLink>
        </Row>
        </Navit>
        <Navit className='profile-card'>
            {profile && <ProfileCard profile={profile}/>}
        </Navit>
        </Container>
            
        </>
    )
}

export default Profile