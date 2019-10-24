import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import comake from '../images/comake.png';

// * STYLE COMPONENT IMPORT

const Logo = styled.img`
  width: 50px;
  height: 50px;
  `

const NavBox = styled.div`
    border-radius: 50px;
    align: right;
    height: 200px;
    `

  const StyledLink = styled(Link)`
  color: #3CB371;
  font-family: Russo-One;
  font-size: 20px;
  margin: 20px;
`;
const Navigation = (props) => {
  return (
    <NavBox>
            
          <StyledLink to="/profile">Profile</StyledLink>
          <StyledLink to="/tools">Tools</StyledLink>
     <img src= {comake}/>
    </NavBox>
  );
};

export default Navigation;

// @russo: 'Russo One', sans-serif;
// @opensans: 'Open Sans', sans-serif;
// // Colors
// @button-bg-color: mediumseagreen;
// @button-fg-color: white;