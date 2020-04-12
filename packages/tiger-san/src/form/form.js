import React from 'react'
import PropTypes from 'prop-types'

export const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {children}
  </form>
)

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  onSubmit: PropTypes.func
}
