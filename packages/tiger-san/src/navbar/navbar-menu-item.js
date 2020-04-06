import React from 'react'
import PropTypes from 'prop-types'

export const NavbarMenuItem = ({ children, href, onClick }) => (
  <li role="none" className="navbar__item">
    <a
      role="menuitem"
      href={href}
      className="navbar__item"
      onClick={onClick}
    >
      {children}
    </a>
  </li>
)

NavbarMenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
