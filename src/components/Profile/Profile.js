// * HOOKS
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
// * APP COMPONENT IMPORT
import ProfileCard from './ProfileCard';
import FormikProfileForm from './ProfileForm';
import axiosWithAuth from '../Utils/axiosWithAuth';


// TODOS // 
// Debug MYPOSTS data request = Use the initial get request, post data is nested
// Get a profile example that has a User photo  = fixed
// Toggle the ProfileForm with an OnClick for the Edit button
// Styling


const Profile = (props) => {
    const [profile, setProfile] = useState();
    const [myPosts, setMyPosts] = useState();

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
            <button><Link to = './IssuesForm'>Post</Link></button>
            <div >My Issues</div>
            <div>My First Priority</div>
      
        
            <FormikProfileForm/>
            
        </style.section>
    )
}

export default Profile