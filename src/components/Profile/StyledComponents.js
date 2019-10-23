import React from 'react';
import styled from 'styled-components';

const section = styled.section`
    border: 1px solid black;
`
const navbar = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    width: 100%;
    background: black;
    color: white;
    font-size: 20px;
    text-decoration: none;
`

const Link = ({}) => (
    <a>Test</a>
  );
  
  const StyledLink = styled(Link)`
    color: white;
    font-weight: bold;
    font-display: ubuntu;
  `;

  const Profile = styled.div`
    color: white;
    background: #3cb371;
    font-weight: bold;
    font-display: ubuntu;
  `;
    
export default {
    section , navbar , Link , StyledLink , Profile
}

// @ubuntu: 'Ubuntu', sans-serif;
// @russo: 'Russo One', sans-serif;
// @opensans: 'Open Sans', sans-serif;
// // Colors
// @button-bg-color: mediumseagreen;
// @button-fg-color: white;

// column
// row
// button
// card
// headline
// subline
// readerText
// navLinks
// headerBox
// bodyBox
// footerBox



