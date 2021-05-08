import React, { RefObject, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.sass"

type Props = {
  menuEnabled: boolean
  scrolled: boolean
}

const Header = ({ menuEnabled, scrolled }: Props) => {
  const [checked, setChecked] = useState(false)

  return (
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
          onChange={e => {
            setChecked(e.target.checked)
          }}
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
        {checked ? (
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            &#x2715;
          </label>
        ) : (
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            &#x2630;
          </label>
        )}
      </div>
    </header>
  )
}

export default Header
