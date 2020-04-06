import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getHeroClassNames = ({ className }) => (
  classnames(className, 'hero')
)

export const Hero = ({ children, className }) => (
  <span className={getHeroClassNames({ className })}>
    {children}
  </span>
)

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.string
}
