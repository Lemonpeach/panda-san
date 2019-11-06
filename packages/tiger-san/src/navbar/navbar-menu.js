import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getMenuClassNames = ({ toggled }) => (
  classnames('navbar__menu', { 'navbar__menu--active': toggled })
)

export const NavbarMenu = ({ children, toggled }) => (
  <ul id="navbar-menu" role="menu" className={getMenuClassNames({ toggled })}>
    {children}
  </ul>
)

NavbarMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  toggled: PropTypes.bool.isRequired
}
