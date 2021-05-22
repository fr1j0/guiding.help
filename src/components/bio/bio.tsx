import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./styles.sass"

const Bio = () => {
  return (
    <section className="bio">
      <StaticImage
        className="bio__image"
        src="../../images/jo-header.jpg"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
      />

      <div className="text_block bio__content">
        <h1>
          Hi <span>I'm Joanne Rayment</span>
        </h1>
        <div className="bio__description">
          <p>
            A former nurse, wife, mother, grandmother and an unshakable optimist
            dedicated in helping you become the person you most want to be.
          </p>
          <p>
            Certified counsellor/life coach ready to guide and help you regain
            control of your life.
          </p>
          <a
            href="https://calendly.com/joanne-141/free-introductory-session"
            target="blank"
            className="btn"
          >
            book a call
          </a>
        </div>
      </div>
    </section>
  )
}

export default Bio
