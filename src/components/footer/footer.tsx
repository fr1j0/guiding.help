import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.sass"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <div className="footer__content">
      <div className="footer__icons">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/Joguidinghelp/"
              target="blank"
              title="facebook"
            >
              <StaticImage
                src="../../images/facebook.svg"
                alt="facebook"
                width={35}
                quality={100}
                layout="fixed"
                placeholder="none"
              />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/971585440238?text=Hi%20Joanne%2C%20I%20have%20a%20question%20from%20the%20website"
              target="blank"
              title="whatsapp"
            >
              <StaticImage
                src="../../images/whatsapp.svg"
                alt="whatsapp"
                width={35}
                quality={100}
                layout="fixed"
                placeholder="none"
              />
            </a>
          </li>
          <li>
            <a href="mailto:jo@guiding.help" target="blank" title="email">
              <StaticImage
                src="../../images/email.svg"
                alt="email"
                width={35}
                quality={100}
                layout="fixed"
                placeholder="none"
              />
            </a>
          </li>
          <li>
            <a
              href="https://calendly.com/joanne-141/free-introductory-session"
              target="blank"
              title="calendly"
            >
              <StaticImage
                src="../../images/calendly.svg"
                alt="calendly"
                width={35}
                quality={100}
                layout="fixed"
                placeholder="none"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__jo">
        <h3>Joanne Rayment</h3>
      </div>
      <div className="footer__tagline">
        Purveyor of Independence, Entertainment, Delight, Confidence and
        Control.
      </div>
      <ul className="footer__copyright">
        <li>© 2021 guiding.help</li>
        <li>(971) 54 347 9338</li>
        <li>
          <a href="mailto:jo@guiding.help" target="blank">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
