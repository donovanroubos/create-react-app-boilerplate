import React from 'react'
import { Link } from 'gatsby'

const Header = (props) => (
  <header className="header">
    <div className="logo">Logo</div>
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/component-library">Components</Link>
        </li>
        <li>
          <a href="https://google.com/">Elsewhere</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
