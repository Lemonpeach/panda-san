import React from 'react'
import PropTypes from 'prop-types'

export const Navbar = ({ children }) => (
  <nav className="navbar">
    {children}
  </nav>
)

Navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired
}
