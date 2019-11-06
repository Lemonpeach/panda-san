import React from 'react'
import PropTypes from 'prop-types'

export const NavbarBrandIcon = ({ children, href, text }) => (
  <a className="navbar__brand__icon" role="link" href={href}>
    <span className="hidden">{text}</span>
    {children}
  </a>
)

NavbarBrandIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
