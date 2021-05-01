import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./styles.sass"

const Bio = () => {
  return (
    <section className="bio">
      <div className="bio__content">
        <div className="bio__text">
          <h1>
            Hi, <span>I'm Joanne Rayment</span>
          </h1>
          <p className="bio__description">
            A former nurse, wife, mother, grandmother and an unshakable optimist
            dedicated in helping you become the person you most want to be.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Bio
