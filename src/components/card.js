import React from 'react'
import styled from "styled-components"
import Picture from "./picture"

const Cards = styled.div` 
background-color: #fcfcfc;
color:red;
grid-column: 16/24;
width: 30%;
height: 30%;

  }
`;

const He = styled.h1`
font-size:auto;
`;

const Text = styled.p`
font-size:auto;
`;


const Klang = (props) => (
    <Cards>
        <Picture
            filename={props.image}
        />

        <He> {props.text2} </He>
        <Text> {props.text} </Text>

    </Cards>


)

export default Klang

