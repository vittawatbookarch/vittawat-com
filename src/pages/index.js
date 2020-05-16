import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"


import Header2 from '../components/header2';
import "../components/style.css"
import Data from "../data/data.yml"
import Card from "../components/card"
import Footer from "../components/footer"

import "../styles/styles.scss"



export default (props) => {
  console.log(props.data)
  return (


    <div className="indexcontainer">

      <Header2 />

      <div className="indextext">
        {Data.indextext}

      </div>
      <Footer />
    </div>



  )
}


export const query = graphql`
  query {
   background: file(relativePath: {eq: "background2.png"}){
      childImageSharp {
        fluid(maxWidth:1440, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
