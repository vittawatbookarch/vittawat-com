import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"


import "../components/style.css"
import Data from "../data/data.yml"
import Header2 from "../components/header2"
import Footer from "../components/footer"


export default (props) => {
  console.log(props.data)
  return (

    <div className="indexcontainer">

      <Header2 />


      <div className="grid-container2">


        <div className="project1-a"> <Img fluid={props.data.a.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Extrusion comfort fan</p> {Data.project1}</p>



      </div >

      <Footer />

    </ div>




  )
}


export const query = graphql`
  query {
   a: file(relativePath: {eq: "fans-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    b: file(relativePath: {eq: "background2.png"}){
        childImageSharp {
          fluid(maxWidth:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`