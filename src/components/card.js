import React from 'react'
import styled from "styled-components"

const Cards = styled.div` 
background-color: #fcfcfc;
color:#222222;
width:300px;
padding:30px;
margin:30px;
border-radius:30px;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }
`;

const He = styled.p`
font-size:20px;
`;

const Text = styled.p`
font-size:20px;
`;


const Klang = (props) => (
    <Cards>

        <He> {props.text2} </He>
        <Text> {props.text} </Text>


    </Cards>


)

export default Klang

