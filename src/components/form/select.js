import React from 'react'
import PropTypes from 'prop-types'

class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: 'Select one'
    }
  }

  handleChange = (e) => {
    this.setState({
      selectedValue: e.target.value
    })

    console.log(e)
  }

  render() {
    const { options, disabled } = this.props
    const { selectedValue } = this.state

    return (
      <div className={`select ${disabled ? 'disabled' : ''}`}>
        {selectedValue}

        <select
          className="select"
          disabled={disabled}
          onChange={(e) => this.handleChange(e)}
        >
          <option value="Select one" selected >
            Select one
          </option>
          {
            options.map(({ label, value }) =>
              <option value={value}>{label}</option>
            )
          }
        </select>

        <div className="arrow">&#8250;</div>
      </div>
    )
  }
}

Select.defaultProps = {
  options: [
    {
      label: 'Audi',
      value: 'Audi'
    },
    {
      label: 'Mercedez',
      value: 'Mercedez'
    },
    {
      label: 'Rolls',
      value: 'Rolls'
    }
  ]
}

Select.PropTypes = {
  options: PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired
}

export default Select
