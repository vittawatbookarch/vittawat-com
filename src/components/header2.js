import React from "react"
import { Link } from "gatsby"


import "../components/style.css"

const Header2 = () => (


    <div className="header2">

        <Link to="/" style={{ textDecoration: 'none', color: '#5E5E5E' }}> Home </Link>
        <Link to="design" style={{ textDecoration: 'none', color: '#5E5E5E' }}> Design</Link>
        <Link to="sound" style={{ textDecoration: 'none', color: '#5E5E5E' }}>Sound</Link>

    </div>



)

export default Header2