import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getButtonClassName = ({ className, color, inverse, loading }) => (
  classnames(className, 'button', {
    'button--is-inverse': inverse,
    'button--is-loading': loading,
    [`button--is-${color}`]: color
  })
)

export const Button = ({
  children, onClick, className, type, color, inverse, loading
}) => (
  <button
    type={type}
    className={getButtonClassName({ className, color, inverse, loading })}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.oneOf([
    'primary', 'yellow', 'red', 'blue', 'green', 'grey', 'white', 'black'
  ]),
  inverse: PropTypes.bool,
  loading: PropTypes.bool
}

Button.defaultProps = {
  inverse: false,
  loading: false
}
