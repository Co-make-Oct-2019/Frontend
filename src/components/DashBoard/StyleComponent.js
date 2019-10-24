import React from 'react';
import styled from 'styled-components';

const section = styled.section`
    border: 1px solid black;
    padding: 20px;
    margin: 50px;
`
const navbar = styled.div`
    
    padding: 1rem;
    background: black;
    color: white;
    font-size: 20px;
    text-decoration: none;
`

const card = styled.div`
  border-raidus: 20px;
  margin: 50px;
  `;
  
const Link = styled.a`
  color: white;
  font-display: ubuntu;
  `;
  
  const setLink = styled(Link)`
  color: white;
  font-display: ubuntu;
  `;

  const Profile = styled.div`
    color: white;
    background: #3cb371;
    font-weight: bold;
    font-display: ubuntu;
  `;
    
export default {
    section , navbar ,  Profile,  card
}

// @ubuntu: 'Ubuntu', sans-serif;
// @russo: 'Russo One', sans-serif;
// @opensans: 'Open Sans', sans-serif;
// // Colors
// @button-bg-color: mediumseagreen;
// @button-fg-color: white;