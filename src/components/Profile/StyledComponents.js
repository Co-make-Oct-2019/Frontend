import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";



//* NAVIGATION STYLES

const NavLogo = styled.img`
  width: 50px;
  height: 50px;
  `

const NavBox = styled.div`
    border-radius: 50px;
    align: right;
    height: 200px;
    `


//* PROFILE FORM STYLES

const Logo = styled.img`
  width: 500px;
  height: 500px;
`

const ProfileColumn = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  width: 200px;
  margin-bottom: 15px;
  border: 1 px solid black;
`

const Title = styled.h3`
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  color: #4d4d4d;
`

const FormDiv = styled.form`
  margin: 0 auto;
  margin-top: 50px;
  width: 300px;
  height: 300px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
  height: 30px;
  border: 1px solid lightgrey;
  border-raidus: 5px;
  width: 300px;
`

const Err = styled.h4`
  color: red;
  font-size: 10px;
`

const Button = styled.input`
  padding: 10px;
  border-radius: 5px;
  background-color: #3cb371;
  color: white;
  width: 200px;
`

//* PROFILE CARD STYLES

const IssueCard = styled.div`
  background-color: black;
  border-radius: 20px;
  align: center;
  padding: 40px;
  color: white;
  margin: 0 auto;
  width: 200px;
`

const CardLogo = styled.img`
  width: 50px;
  height: 50px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
  border: 1px solid lightgrey;
  background-color: whitesmoke;
  padding: 20px;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100px;
  margin-left: 20px;
`

//* PROFILE PAGE STYLES

const Container = styled.div`
margin: 0;
padding-top: 30px;
background-color: whitesmoke;
`
const Navit = styled.div`  
margin: 0 auto;
margin-top: 50px;
background-color: white;
box-shadow: 3px 10px 3px grey;
width: 70%;
border-radius: 5px;
padding: 15px;
`
const Right = styled.div`
text-align: right;
`    
const StyledLink = styled(Link)`
color: #3CB371;
font-family: Russo-One;
font-size: 20px;
margin: 15px;
`

const PageRow = styled.div`
display: flex;
flex-direction: row;
borer: 1px solid black;
`


export default {
  PageRow,
  StyledLink,
  Right,
  Navit,
  Container,
  Column,
  Row,
  CardLogo,
  IssueCard,
  Button,
  Err,
  Input,
  FormDiv,
  Title,
  ProfileColumn,
  Logo,
  NavBox,
  NavLogo
}