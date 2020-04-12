import React from 'react'
import classnames from 'classnames'

import { Button } from '../button'

const getFormButtonClassName = ({ className }) => (
  classnames('form__button', className)
)

export const FormButton = ({ ...props }) => (
  <Button
    {...props}
    type="submit"
    className={getFormButtonClassName({ ...props })}
  />
)

FormButton.propTypes = {
  ...Button.propTypes
}
