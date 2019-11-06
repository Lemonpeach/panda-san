import React from 'react'
import PropTypes from 'prop-types'

export const NavbarBrand = ({ children }) => (
  <div className="navbar__brand">
    {children}
  </div>
)

NavbarBrand.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired
}
