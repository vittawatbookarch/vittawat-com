import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"


import "../components/style.css"
import Data from "../data/data.yml"
import Header2 from "../components/header2"
import Footer from "../components/footer"
import Video from "../assets/wavevdo.mp4"



export default (props) => {
  console.log(props.data)
  return (

    <div className="indexcontainer">

      <Header2 />


      <div className="grid-container2">


        <div className="project1-a"> <Img fluid={props.data.wave.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Wave installation</p> {Data.wave}</p>

        <p className="text2">  <p className="project2H"> Component </p>{Data.wave2}</p>
        <div className="project1-b"> <Img fluid={props.data.drop.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.drop2.childImageSharp.fluid} /></div>

        <div className="project1-d"> <Img fluid={props.data.b.childImageSharp.fluid} /></div>
        <p className="text2">  <p className="project2H"> Section view </p>{Data.wave3}</p>
        <div className="project1-e"> <Img fluid={props.data.wave3.childImageSharp.fluid} /></div>


        <div className="project1-f"> <Img fluid={props.data.wave6.childImageSharp.fluid} /></div>
        <p className="project2H"> Fluid visualization in different perspective  </p>
        <div className="project1-g"> <Img fluid={props.data.wave2.childImageSharp.fluid} /></div>
        <div className="project1-vdo" >
          <video width="100%" controls autoplay loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div >

      <Footer />

    </ div >

  )
}


export const query = graphql`
  query {
          wave : file(relativePath: {eq: "wave-cover.jpg"}){
          childImageSharp {
          fluid(maxWidth:1500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    drop : file(relativePath: {eq: "drop.jpg"}){
          childImageSharp {
          fluid(maxWidth:1400, quality:100) {
          ...GatsbyImageSharpFluid
        }
        }
      },
      drop2 : file(relativePath: {eq: "drop2.jpg"}){
          childImageSharp {
          fluid(maxWidth:1400, quality:100) {
          ...GatsbyImageSharpFluid
        }
        }
      },
      wave3 : file(relativePath: {eq: "wave3.1.jpg"}){
          childImageSharp {
          fluid(maxWidth:1400, quality:100) {
          ...GatsbyImageSharpFluid
        }
        }
      },
      wave6 : file(relativePath: {eq: "wave6.jpg"}){
          childImageSharp {
          fluid(maxWidth:1400, quality:100) {
          ...GatsbyImageSharpFluid
        }
        }
      },
      wave2 : file(relativePath: {eq: "wave2.jpg"}){
          childImageSharp {
          fluid(maxWidth:1400, quality:100) {
          ...GatsbyImageSharpFluid
        }
        }
      },
    b: file(relativePath: {eq: "wavesection.jpg"}){
          childImageSharp {
          fluid(maxWidth:1400, quality:100) {
          ...GatsbyImageSharpFluid
        }
        }
      }
    }
    
`