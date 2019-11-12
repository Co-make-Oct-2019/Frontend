import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import style from './StyleComponent'
import comake from '../images/comake.png';

// * STYLE COMPONENT IMPORT


const Navigation = (props) => {
  return (
    <style.NavBox>
          <style.StyledLink to="/profile">Profile</style.StyledLink>
          <style.StyledLink to="/tools">Tools</style.StyledLink>
    </style.NavBox>
  );
};

export default Navigation;
