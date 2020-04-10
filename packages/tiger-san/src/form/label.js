import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getLabelClassName = ({ className, visible }) => (
  classnames(className, {
    'is-sr-only': !visible
  })
)

export const Label = ({ children, className, htmlFor, visible }) => (
  <label
    htmlFor={htmlFor}
    className={getLabelClassName({ className, visible })}
  >
    {children}
  </label>
)

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  visible: PropTypes.bool
}

Label.defaultProps = {
  visible: true
}
