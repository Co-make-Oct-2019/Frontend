// * HOOKS
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
// * APP COMPONENT IMPORT
import ProfileCard from './ProfileCard';
import FormikProfileForm from './ProfileForm';
import axiosWithAuth from '../Utils/axiosWithAuth';


// TODOS //  // Get a profile example that has a User photo  = fixed // Debug MYPOSTS data request = Use the initial get request, post data is nested


// Toggle the ProfileForm with an OnClick for the Edit button
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
            <Link to = '/' >DashBoard</Link>
            <Link to = '/ProfileForm'>Edit</Link>
           {profile && <ProfileCard profile={profile}/>}
            <button><Link to = '/new-issue'>Post an Issue</Link></button>

            
            <div>My First Priority</div>
        
            <FormikProfileForm/>
            
        </style.section>
    )
}

export default Profile