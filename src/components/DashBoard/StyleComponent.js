import React from 'react'
//* STYLED COMPONENTS FOR DASHBOARD, ESCALATE, NAVIGATION
import styled from 'styled-components';


const PageBox = styled.div`
   padding: 80px;
`
const IssueBox = styled.div`
   display: flex;
   flex-wrap: wrap;
   `
const Navit = styled.div`
   background-color: white;
   box-shadow: 3px 3px 3px black;
   height: 50px;
   border-radius: 10px;
   `
const Right = styled.div`
   display: flex;
   margin-left: 120px;
   `
const IssueCard = styled.div`
   background-color: black;
   border-radius: 20px;
   align: center;
   padding: 40px;
   color: white;
   margin: 20px;
   width: 100px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
    borer: 1px solid black;
    `
    
export default {
    PageBox, Row, IssueCard, Right, Navit, 
}
