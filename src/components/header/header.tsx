import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.sass"

type Props = {
  scrolled: boolean
}

const Header = ({ scrolled }: Props) => (
  <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
    <div className="header__content">
      <Link to="/">
        <StaticImage
          className={`logo ${scrolled ? "logo--scrolled" : ""}`}
          src="../../images/guiding-help-logo.svg"
          width={100}
          quality={100}
          alt="Guiding help"
          layout="fullWidth"
          placeholder="none"
        />
      </Link>
      <input type="checkbox" id="nav-toggle" className="header__nav-toggle" />
      <nav>
        <ul className="header__menu">
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
              href="https://calendly.com/joanne-141"
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
