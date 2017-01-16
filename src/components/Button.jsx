import React, { PropTypes } from 'react'
import classnames from 'classnames'
import css from '../style'

function Button({ children, className, icon, style, ...props }) {
  return (
    <button {...props} style={css(`${style}`)} className={classnames('', className)}>
      {icon && <i className={classnames('fa', `fa-${icon}`)} aria-hidden="true" />}
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  style: PropTypes.string,
}

export default Button
