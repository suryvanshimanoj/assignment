/* 
npm install --save styled-components


import styled from 'styled-components';
 */


import React from 'react'
import styled from 'styled-components';

function Styled_component() {

    const Manoj=styled.h1`
    color:red;
    border:2px solid red;
    text-align:center;
    `;
    const Mybutton = styled.button`
    border:2px solid blue;
    font-size:bold;
    padding:10px 30px;
    border-radius:20px;
    background:none;
    color:red;
    display:block;
    margin:0 auto;
    &:hover{
        background : blue;
        color:aqua;
    }
    `;
    const Btn = styled.button`
    font-size:bold;
    padding:10px 30px;
    border-radius:10px;
    background:gray;
    color:white;
    display:block;
    margin:0 auto;
    `;
    const Btnred = styled(Btn)`
    background:red;
    `;
    const Btngreen = styled(Btn)`
    background:green;
    `;
    const Btnpink = styled(Btn)`
    background:pink;
    `;
    const Btnblack = styled(Btn)`
    background:black;
    `;


    const Dynamic = styled(Btn)`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    `;

    return (
        <div>
            <h1>Styled_component</h1>
            <hr />

            <Manoj>Tops Informition</Manoj>
            <hr />

            <Mybutton>button</Mybutton>
            <hr />

            <Btn>Basic buttob</Btn>
            <Btnred>Red button</Btnred>
            <Btngreen>Green button</Btngreen>
            <Btnpink>Pink button</Btnpink>
            <Btnblack>Black button</Btnblack>
            <hr />

            <Dynamic  primary> Dynamic Button</Dynamic>
            <Dynamic>Dynamic Button</Dynamic>
           


        </div>
    )
}

export default Styled_component