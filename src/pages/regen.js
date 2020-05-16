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


        <div className="project1-a"> <Img fluid={props.data.chair.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Regen chair</p> {Data.chair}</p>
        <div className="chair2-d"> <Img fluid={props.data.chair2.childImageSharp.fluid} /></div>

        <div className="chair2-b"> <Img fluid={props.data.chair3.childImageSharp.fluid} /></div>
        <div className="chair2-c"> <Img fluid={props.data.chair4.childImageSharp.fluid} /></div>



      </div >

      <Footer />

    </ div >




  )
}


export const query = graphql`
  query {
   chair : file(relativePath: {eq: "chair-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:1500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    chair2 : file(relativePath: {eq: "chair2.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      chair3 : file(relativePath: {eq: "chair3.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      chair4 : file(relativePath: {eq: "chair4.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`