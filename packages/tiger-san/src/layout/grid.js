import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getGridClassName = ({ className }) => (
  classnames(className, 'grid')
)

export const Grid = ({ children, className }) => (
  <div className={getGridClassName({ className })}>
    {children}
  </div>
)

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.string
}
