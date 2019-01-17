import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RadioOption extends Component {
  constructor(props) {
    super(props)

    this.toggleCheck = this.toggleCheck.bind(this)

    this.id = Math.random().toString().replace(/0\./, '')
  }

  toggleCheck() {
    const { disabled } = this.props

    !disabled && (this.refs.radio.checked = true)
  }

  render() {
    const { label, disabled, name, value } = this.props

    return (
      <div className="radio-option-wrapper">
        {
          typeof label !== 'undefined' && (
            <label
              htmlFor={this.id}
              className={`${disabled ? 'disabled' : ''}`}
              onClick={this.toggleCheck}
            >
              {label}
            </label>
          )
        }
        <div className="radio-option" onClick={this.toggleCheck}>
          <input
            ref="radio"
            id={this.id}
            type="radio"
            disabled={disabled}
            name={name}
            value={value}
          />
          <span></span>
        </div>
      </div>
    )
  }
}

RadioOption.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default RadioOption
