import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-fixed-top is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-2 has-text-weight-bold	">
          {siteTitle}
        </Link>
      </div>

      <div id="navbar-menu" className="navbar-menu is-static">
        <div className="navbar-end">
          <a
            href="tel:1-555-555-5555"
            className="navbar-item is-secondary is-size-5"
          >
            (555) 555-5555
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
