import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getInputGroupClassName = ({ className }) => (
  classnames(className, 'input-group')
)

export const InputGroup = ({ children, className }) => (
  <div className={getInputGroupClassName({ className })}>
    {children}
  </div>
)

InputGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.string
}
