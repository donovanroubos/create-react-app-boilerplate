import React from 'react'

import Button from '../../components/button'
import Input from '../../components/form/input'
import Checkbox from '../../components/form/checkbox'
import RadioButton from '../../components/form/radio-option'
import Select from '../../components/form/select'
import Slider from '../../components/form/slider'

const ComponentLibrary = () => (
  <main className="page component-library">
    <div className="block navigation">
      <h1>Component Library</h1>
      <ul>
        <li><a href="#text">Text</a></li>
        <li><a href="#buttons">Buttons</a></li>
        <li><a href="#inputs">Inputs</a></li>
        <li><a href="#checkbox">Checkbox</a></li>
      </ul>
    </div>

    <div className="block headings" id="text">
      <h2>Text elements</h2>

      <h1>Heading one</h1>
      <h2>Heading two</h2>
      <h3>Heading three</h3>
      {/* eslint-disable-next-line max-len */}
      <p>Aliquam eget ante blandit nisl rhoncus bibendum. Nulla tempor nunc ac ligula aliquam, at rhoncus libero laoreet. Ut a purus vel nunc luctus accumsan quis id enim. Pellentesque convallis odio sed arcu scelerisque pellentesque.</p>
    </div>

    <div className="block headings" id="buttons">
      <h2>Buttons</h2>

      <Button text="Primary small" size="sm" style="primary" />
      <Button text="Primary medium" size="md" style="primary" />
      <Button text="Primary large" size="lg" style="primary" />

      <Button text="Secondary small" size="sm" style="secondary" />
      <Button text="Secondary medium" size="md" style="secondary" />
      <Button text="Secondary large" size="lg" style="secondary" />

      <Button text="Disabled" size="lg" style="primary" disabled />
      <Button text="Disabled" size="lg" style="secondary" disabled />

      <Button text="Full width" size="lg" style="primary" fullWidth />
    </div>

    <div className="block inputs" id="inputs">
      <h2>Inputs</h2>

      <Input type="text" label="Text" name="text-input" />
      <Input type="password" label="Password" name="password" />
      <Input type="text" label="Disabled" disabled name="disabled" />
    </div>

    <div className="block" id="checkbox">
      <h2>Checkbox</h2>

      <Checkbox disabled />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" disabled />
    </div>

    <div className="block" id="radio-button">
      <h2>Radio button</h2>

      <RadioButton name="test-123" value="0" disabled />
      <RadioButton name="test-123" value="0" label="Radio button 2" disabled />
      <RadioButton name="test-123" value="Radio button 3" label="Radio button 3" />
      <RadioButton name="test-123" value="Radio button 4" label="Radio button 4" />
      <RadioButton name="test-123" value="Radio button 5" label="Radio button 5" />
    </div>

    <div className="block" id="select">
      <h2>Select</h2>

      <Select disabled />
      <Select />
    </div>

    <div className="block" id="slider">
      <Slider />
    </div>
  </main>
)

export default ComponentLibrary
