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


        <div className="project1-a"> <Img fluid={props.data.dp.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Curve gem</p> {Data.dp1}</p>

        <p className="text2">  <p className="project2H"> Component </p>{Data.dp2}</p>
        <div className="project1-b"> <Img fluid={props.data.dp2.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.dp3.childImageSharp.fluid} /></div>
        <div className="project1-d"> <Img fluid={props.data.dp4.childImageSharp.fluid} /></div>
        <div className="project1-e"> <Img fluid={props.data.dp7.childImageSharp.fluid} /></div>
        <div className="project1-f"> <Img fluid={props.data.dp6.childImageSharp.fluid} /></div>






      </div >

      <Footer />

    </ div >




  )
}


export const query = graphql`
  query {
   dp : file(relativePath: {eq: "dp-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:1400, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    dp2 : file(relativePath: {eq: "dp2.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      dp3 : file(relativePath: {eq: "dp3.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      dp7 : file(relativePath: {eq: "dp7.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      dp6 : file(relativePath: {eq: "dp6.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },

    dp4: file(relativePath: {eq: "dp4.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`