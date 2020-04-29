import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DropMenu from "./dropdown"

const Header = ({ siteTitle }) => (
  <header
    style={{

    }}
  >


    <DropMenu />

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
