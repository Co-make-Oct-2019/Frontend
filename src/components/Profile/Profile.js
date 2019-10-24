// * HOOKS
import React, { useEffect, useState } from 'react';
import { Link , Route , NavLink } from 'react-router-dom';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
// * APP COMPONENT IMPORT
import ProfileCard from './ProfileCard';
import FormikProfileForm from './ProfileForm';
import axiosWithAuth from '../Utils/axiosWithAuth';


// TODOS //  *component-header *NavLink *h2 *profile-card *button *main-section *info-section

// Add classNames to elements
// Styling


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

        <style.section>

            <h2>Profile Component</h2>
            <NavLink to = '/' >DashBoard</NavLink>
            <NavLink to='./ProfileForm'> Edit </NavLink>
                <div className='profile-card'>
                {profile && <ProfileCard profile={profile}/>}
                </div>
            <button><Link to = '/new-issue'>Post an Issue</Link></button>
            <Route path="./ProfileForm" render={() => <FormikProfileForm />}/>
            
        </style.section>
    )
}

export default Profile