import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const HEADINGS = {
  1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4'
}

const getTitleClassNames = ({ className, size }) => (
  classnames(className, 'title', {
    'title--is-1': size === 1,
    'title--is-2': size === 2,
    'title--is-3': size === 3,
    'title--is-4': size === 4
  })
)

export const Title = ({ children, className, size }) => {
  const Heading = HEADINGS[size]
  return (
    <Heading className={getTitleClassNames({ className, size })}>
      {children}
    </Heading>
  )
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf([1, 2, 3, 4])
}

Title.defaultProps = {
  size: 3
}
