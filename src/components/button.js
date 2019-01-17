import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  text,
  style,
  size,
  disabled,
  fullWidth
}) => (
  <button
    className={`btn ${style} ${size} ${fullWidth ? 'full-width' : ''}`}
    disabled={disabled}
  >
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

export default Button
