// * HOOKS
import React, { useEffect, useState } from 'react';
import { Link , Route , NavLink } from 'react-router-dom';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
// * APP COMPONENT IMPORT
import ProfileCard from './ProfileCard';
import FormikProfileForm from './ProfileForm';
import axiosWithAuth from '../Utils/axiosWithAuth';
import styled from 'styled-components';


// TODOS //  *component-header *NavLink *h2 *profile-card *button *main-section *info-section
// You might have to create a ProfileNav, a separate component entirely
// Add classNames to elements
// Styling

    const Navit = styled.div`   
        margin: 0 auto;
        background-color: white;
        box-shadow: 3px 10px 3px grey;
        width: 90%;
        border-radius: 10px;
        padding: 20px;
        `
    const StyledLink = styled(Link)`
        color: #3CB371;
        font-family: Russo-One;
        font-size: 20px;
        margin: 15px;
        `;

    const Button = styled.button`
        padding: 10px;
        color: white;
        background-color: #3CB371;
        border-radius: 5px;
        margin: 10px;
        `

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
        <Navit className='profile-card'>
        
        <h1>Profile </h1>
        <Navit>
        <Row>
           <StyledLink to = '/' >DashBoard</StyledLink>
           <StyledLink to = '/tools' >Tools</StyledLink>
           <Button>
                <Link to='/ProfileForm'> Edit Profile </Link>
            </Button>
            
            <Button>
                <Link to = '/new-issue'>Post an Issue</Link>
            </Button>
        </Row>
        </Navit>

        

        
            {profile && <ProfileCard profile={profile}/>}
            <Row>
            
            </Row>
            
        </Navit>

            
        </>
    )
}

export default Profile