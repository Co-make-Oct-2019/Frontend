import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation.js';

// * STYLED COMPONENT IMPORT
 import style from './StyledComponents';

const Profile = () => {

    const [user, setUser] = useState([]); // set profile
    const [myPosts, setMyPosts] = useState([]); // set my posts
    const [image, setImage] = useState([]); // set my image


    useEffect(() => {
        axios
        .get('https://bw-co-make.herokuapp.com/users/getuserinfo?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D')
        .then( response => {
            setUser(response);
            setMyPosts(response);
            // setImage(imageurl);
        })
        .catch (error => {
            console.log("The data was not returned", error)
        })
    }, [user, myPosts, image])

    return (
        <style.section>
            <h2>Profile Component</h2>
            <Navigation/>
            <div>
        {/* {user.map( user => {
          
            return (
                </>
            )
            })} */}
       </div>
        </style.section>

        // buttons / links //
        // navigation 
        // edit my profile 
        // post
        // my posts
    )
}

export default Profile







