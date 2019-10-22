import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
import ProfileCard from './ProfileCard';
import axiosWithAuth from '../Utils/axiosWithAuth';


const Profile = (props) => {
    const [profile, setProfile] = useState();

    useEffect(() => {
        axiosWithAuth().get('/users/getuserinfo')
        .then(response => {
            console.log(response);
            return response && setProfile(response.data);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })
    }, [])


console.log(profile);
    return (
        <style.section>
            <h2>Profile Component</h2>
            <Navigation/>
        
        <ProfileCard profile={profile}/>
        </style.section>
    )
}

export default Profile