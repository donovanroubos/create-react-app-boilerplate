import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false
    }

    this.toggleCheck = this.toggleCheck.bind(this)

    this.id = Math.random().toString().replace(/0\./, '')
  }

  toggleCheck() {
    const { isChecked } = this.state
    const { disabled } = this.props

    !disabled && this.setState({ isChecked: !isChecked })
  }

  render() {

    const { isChecked } = this.state
    const { label, disabled } = this.props

    return (
      <div className="checkbox-wrapper">
        {
          typeof label !== 'undefined' && (
            <label htmlFor={this.id} className={`${disabled ? 'disabled' : ''}`}>{label}</label>
          )
        }
        <div className="checkbox" onClick={this.toggleCheck}>
          <input
            id={this.id}
            type="checkbox"
            checked={isChecked}
            disabled={disabled}
            readOnly
          />
          <span>&#10003;</span>
        </div>
      </div>
    )
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool
}

export default Checkbox
