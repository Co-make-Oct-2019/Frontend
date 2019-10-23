import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
// * STYLED COMPONENT IMPORT
import style from './StyledComponents';
import ProfileCard from './ProfileCard';
import FormikProfileForm from './ProfileForm';
import axiosWithAuth from '../Utils/axiosWithAuth';
import DashBoard from '../DashBoard/DashBoard';


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

    useEffect(() => {
        axiosWithAuth().get('/posts/myposts')
        .then(response => {
            console.log(response.data);
            return response && setMyPosts(response.data)
        })
    }, [])


    return (
        <style.section>
            <h2>Profile Component</h2>
            <Link to = '/' >DashBoard</Link>
            <Link to = '/ProfileForm'>Edit</Link>
            <ProfileCard profile={profile}/>
            <button><Link to = './IssuesForm'>Post</Link></button>
            <div >My Issues</div>
            <div>My First Priority</div>
            <FormikProfileForm/>
            
        </style.section>
    )
}

export default Profile