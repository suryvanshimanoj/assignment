/*
npm install --save styled-components


import styled from 'styled-components';
*/


import React from 'react'
import styled from 'styled-components';


function Styled_component() {

    const Manoj = styled.h1`
     color:pink;
     border:solid 2px pink;
     text-align: center;
     width:400px;
     `;
     const MyButton = styled.button`
      border:2px solid palevioletred;
      font-weight:bolder;
      border-radius:10px;
      padding:10px 35px;
      background:none;
      color:skyblue;
      display:block;
      margin:0 auto;
    &:hover{
            background : palevioletred;
            color:white;
            }
    `;
    const Btn1 = styled.button`
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:aqua;
    color:white;
    display:block;
    margin:0 auto;
    `;

   const Btnred=styled(Btn1)`
   background:red;
   `
   const Btngreen = styled(Btn1)`
   background:green;
   `
   const Btnback = styled(Btn1)`
   background:black;
   `
   const Btnblue = styled(Btn1)`
   background:blue;
   `
   const Btnpink = styled(Btn1)`
   background:pink;
   `
   const Dynamic = styled(Btn1)`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    `;


    return (
        <div>
            <h1>Styled_component</h1>
            <hr />

            <Manoj>Raj Nagar</Manoj>
            <hr />

            <MyButton>Button</MyButton>
            <hr />
            <Btn1>basic button</Btn1>
            <Btnred>red button</Btnred>
            <Btngreen>green button</Btngreen>
            <Btnback>black button</Btnback>
            <Btnblue>blue button</Btnblue>
            <Btnpink>pink button</Btnpink>

            <hr />
            <Dynamic primary>Dynamic button</Dynamic>
            <Dynamic>Dynamic Button</Dynamic>



        </div>
    )
}

export default Styled_component