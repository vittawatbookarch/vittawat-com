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


        <div className="project1-a"> <Img fluid={props.data.fabricate.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Fabricate</p> {Data.fabricate}</p>

        <p className="text2">  <p className="project2H"> Component </p>{Data.fabricate2}</p>
        <div className="project1-b"> <Img fluid={props.data.tube.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.arc.childImageSharp.fluid} /></div>




      </div >

      <Footer />

    </ div >




  )
}


export const query = graphql`
  query {
   fabricate : file(relativePath: {eq: "fabricate-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    tube : file(relativePath: {eq: "tube.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      arc : file(relativePath: {eq: "ARC.jpg"}){
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