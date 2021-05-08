import React, { RefObject } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.sass"

type Props = {
  menuEnabled: boolean
  scrolled: boolean
}

const Header = ({ menuEnabled, scrolled }: Props) => (
  <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
    <div className="header__content">
      <Link to="/">
        <StaticImage
          className={`logo ${scrolled ? "logo--scrolled" : ""}`}
          src="../../images/guiding-help-logo.svg"
          quality={100}
          alt="Guiding help"
          layout="fullWidth"
          placeholder="none"
        />
      </Link>
      <input
        type="checkbox"
        id="nav-toggle"
        className="header__nav-toggle"
        onChange={() => {}}
        {...(menuEnabled ? {} : { checked: false })}
      />
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-story/" activeClassName="active">
              My story
            </Link>
          </li>
          <li>
            <Link to="/services/" activeClassName="active">
              Services
            </Link>
          </li>
          <li>
            <a
              className="btn-border"
              href="https://calendly.com/joanne-141/free-introductory-session"
              target="blank"
            >
              Book a call
            </a>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </div>
  </header>
)

export default Header
