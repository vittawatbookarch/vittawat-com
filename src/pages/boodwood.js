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


        <div className="project1-a"> <Img fluid={props.data.boodwood.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Boodwood</p> {Data.boodwood}</p>
        <div className="boodwood1"> <Img fluid={props.data.boodwood3.childImageSharp.fluid} /></div>
        <div className="boodwood2"> <Img fluid={props.data.boodwood11.childImageSharp.fluid} /></div>
        <div className="boodwood3"> <Img fluid={props.data.boodwood2.childImageSharp.fluid} /></div>
        <div className="boodwood4"> <Img fluid={props.data.boodwood5.childImageSharp.fluid} /></div>
        <div className="boodwood4"> <Img fluid={props.data.boodwood6.childImageSharp.fluid} /></div>
        <div className="chair2-b"> <Img fluid={props.data.boodwood14.childImageSharp.fluid} /></div>
        <div className="chair2-c"> <Img fluid={props.data.boodwood9.childImageSharp.fluid} /></div>

        <div className="boodwood4"> <Img fluid={props.data.boodwood13.childImageSharp.fluid} /></div>
        <div className="boodwood4"> <Img fluid={props.data.boodwood4.childImageSharp.fluid} /></div>






      </div >

      <Footer />

    </ div >




  )
}


export const query = graphql`
  query {
   boodwood : file(relativePath: {eq: "boodwood-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:1500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    boodwood2 : file(relativePath: {eq: "boodwood2.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boodwood3 : file(relativePath: {eq: "boodwood3.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boodwood4 : file(relativePath: {eq: "boodwood4.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boodwood5 : file(relativePath: {eq: "boodwood5.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boodwood6 : file(relativePath: {eq: "boodwood6.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boodwood14 : file(relativePath: {eq: "boodwood14.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boodwood13 : file(relativePath: {eq: "boodwood13.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boodwood9 : file(relativePath: {eq: "boodwood9.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boodwood11 : file(relativePath: {eq: "boodwood11.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`