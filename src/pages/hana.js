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


        <div className="project1-a"> <Img fluid={props.data.hana.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Hana</p> {Data.hana}</p>
        <div className="chair2-d"> <Img fluid={props.data.hana2.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.hana4.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.hana6.childImageSharp.fluid} /></div>

        <div className="chair2-d"> <Img fluid={props.data.hana3.childImageSharp.fluid} /></div>
        <div className="project1-b"> <Img fluid={props.data.hana7.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.hana8.childImageSharp.fluid} /></div>


      </div >

      <Footer />

    </ div >




  )
}


export const query = graphql`
  query {
   hana : file(relativePath: {eq: "hana-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:1500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    hana2 : file(relativePath: {eq: "hana2.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hana3 : file(relativePath: {eq: "hana3.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hana6 : file(relativePath: {eq: "hana6.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hana7 : file(relativePath: {eq: "hana7.png"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hana8 : file(relativePath: {eq: "hana8.png"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hana4 : file(relativePath: {eq: "hana4.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`