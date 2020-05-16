import React from "react"
import { Link } from "gatsby"

import "../components/style.css"
import Data from "../data/data.yml"

const Footer = () => (


    <div className="footer">

        <p>{Data.title2}</p>
        <p>{Data.title3}</p>
        <p>{Data.title4}</p>

    </div>

)
export default Footer