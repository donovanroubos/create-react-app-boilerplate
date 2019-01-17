import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Input = ({label, ...props}) => (
  <div className="input">
    <input placeholder={label} {...props} />
    {
      label && <label>{label}</label>
    }
  </div>
)

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default Input
