import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getInputClassName = ({ type }) => (
  classnames('input', {
    'input--select': type === 'select',
    'input--textarea': type === 'textarea'
  })
)

const getInputComponent = ({ type }) => {
  return ['select', 'textarea'].includes(type) ? type : 'input'
}

export const Input = React.forwardRef(({
  children,
  id,
  name,
  type,
  placeholder,
  required,
  defaultValue
}, ref) => {
  const InputComponent = getInputComponent({ type })
  return (
    <InputComponent
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={getInputClassName({ type })}
      required={required}
      defaultValue={defaultValue}
      ref={ref}
    >
      {children}
    </InputComponent>
  )
})

Input.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]),
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string
}
