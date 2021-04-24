import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.sass"

const Header = () => (
  <header className="header">
    <div className="header__content">
      <Link to="/">
        <StaticImage
          class="logo"
          src="../../images/logo.svg"
          width={100}
          quality={100}
          alt="Guiding help"
          layout="fixed"
          placeholder="none"
        />
      </Link>
      <ul className="header__menu">
        <li>
          <Link to="/my-story" activeClassName="active">
            My story
          </Link>
        </li>
        <li>
          <Link to="/services" activeClassName="active">
            Services
          </Link>
        </li>
        <li>
          <Link
            className="btn-border"
            to="https://calendly.com/joanne-141"
            target="blank"
          >
            Book a call
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
