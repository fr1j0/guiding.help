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
        <div className="bio__text">
          <h1>
            Hi <span>I'm Joanne Rayment</span>
          </h1>
          <p className="bio__description">
            <p>
              A former nurse, wife, mother, grandmother and an unshakable
              optimist dedicated in helping you become the person you most want
              to be.
            </p>
            <p>
              Certified counsellor/life coach ready to guide and help you regain
              control of your life.
            </p>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Bio
