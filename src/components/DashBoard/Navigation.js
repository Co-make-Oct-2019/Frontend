import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// * STYLE COMPONENT IMPORT





const NavBox = styled.div`
    border-radius: 50px;
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
          <img src= {'./images/Co-Make.png'}></img>
          <StyledLink to="/profile">Profile</StyledLink>
           
          <StyledLink to="/tools">Tools</StyledLink>
     
    </NavBox>
  );
};

export default Navigation;

// @russo: 'Russo One', sans-serif;
// @opensans: 'Open Sans', sans-serif;
// // Colors
// @button-bg-color: mediumseagreen;
// @button-fg-color: white;