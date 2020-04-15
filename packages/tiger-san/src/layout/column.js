import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import map from 'lodash/map'

const getPrefix = prefix => prefix ? `-${prefix}` : ''
const getBreakpoint = bp => bp === 'mobile' ? '' : `-${bp}`

const getModifiers = ({ prefix, modifiers }) => (
  map(modifiers, (size, breakpoint) => (
    `column--is${getPrefix(prefix)}-${size}${getBreakpoint(breakpoint)}`
  ))
)

const getColumnClassName = ({ className, sizes, offsets }) => (
  classnames(
    className,
    'column',
    ...getModifiers({ modifiers: sizes }),
    ...getModifiers({ prefix: 'offset', modifiers: offsets })
  )
)

export const Column = ({
  children, className, sizes, offsets
}) => (
  <div className={getColumnClassName({ className, sizes, offsets })}>
    {children}
  </div>
)

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.string,
  sizes: PropTypes.shape({
    mobile: PropTypes.number,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
    widescreen: PropTypes.number,
    fullhd: PropTypes.number
  }),
  offsets: PropTypes.shape({
    mobile: PropTypes.number,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
    widescreen: PropTypes.number,
    fullhd: PropTypes.number
  })
}
