import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getBurgerClassName = ({ toggled }) => (
  classnames('navbar__burger', { 'navbar__burger--active': toggled })
)

export const NavbarBurger = ({ children, toggled, onClick }) => (
  <div className={getBurgerClassName({ toggled })}>
    <button
      role="button"
      aria-haspopup="true"
      aria-expanded={toggled}
      aria-controls="navbar-menu"
      onClick={onClick}
    >
      {children}
    </button>
  </div>
)

NavbarBurger.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  toggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
