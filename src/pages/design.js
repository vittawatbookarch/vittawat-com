import React from 'react'
import { graphql } from "gatsby"
import { Link } from "gatsby"


import Img from "gatsby-image"


import "../components/style.css"

import Header2 from "../components/header2"
import Footer from "../components/footer"


import "../styles/styles.scss"


export default (props) => {
  console.log(props.data)
  return (

    <div className="indexcontainer">


      <Header2 />

      <div className="grid-container">

        <Link to="fan" className="one" >  <Img fluid={props.data.a.childImageSharp.fluid} /></Link><p className="undertext">Extrusion comfort fan</p>
        <Link to="wave" className="two">  <Img fluid={props.data.b.childImageSharp.fluid} /></Link> <p className="undertext">Wave installation</p>
        <Link to="regen" className="three">  <Img fluid={props.data.chair.childImageSharp.fluid} /> </Link> <p className="undertext">Regen chair</p>
        <Link to="hana" className="four">  <Img fluid={props.data.hana.childImageSharp.fluid} /></Link>  <p className="undertext">Hana </p>
        <Link to="fabricate" className="five">  <Img fluid={props.data.fabricate.childImageSharp.fluid} /></Link> <p className="undertext">Fabricate installation </p>
        <Link to="kid" className="six">  <Img fluid={props.data.treehouse.childImageSharp.fluid} /> </Link> <p className="undertext"> Kids treehouse </p>
        <Link to="dp" className="seven">  <Img fluid={props.data.dp.childImageSharp.fluid} /> </Link><p className="undertext">Curve gem</p>
        <Link to="boodwood" className="eight">  <Img fluid={props.data.boodwood.childImageSharp.fluid} /> </Link> <p className="undertext">Boodwood</p>
        <Link to="int" className="nine">  <Img fluid={props.data.room.childImageSharp.fluid} /> </Link><p className="undertext">Renovated casual living room</p>
        <Link to="diamondpearl" className="ten">  <Img fluid={props.data.diamondpearl.childImageSharp.fluid} /> </Link>
        <p className="undertext-b">Diamondpearl installation</p>

      </div >

      <Footer />

    </ div>

  )
}


export const query = graphql`
  query {
   a: file(relativePath: {eq: "fans-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:1400, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
       b: file(relativePath: {eq: "wave-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:1400, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    hana: file(relativePath: {eq: "hana-cover.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      treehouse: file(relativePath: {eq: "treehouse-cover.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      boodwood: file(relativePath: {eq: "boodwood-cover.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fabricate: file(relativePath: {eq: "fabricate-cover.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      room: file(relativePath: {eq: "room-cover.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      dp: file(relativePath: {eq: "dp-cover.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      diamondpearl: file(relativePath: {eq: "diamondpearl-cover.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    chair: file(relativePath: {eq: "chair-cover.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    },
    
`
