import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./styles.sass"

type Props = {
  background: boolean
  side: "right" | "left"
}

const BioSecondary = ({ background, side }: Props) => {
  console.log(side)
  return (
    <div
      className={`bio-secondary ${
        background ? "bio-secondary--background" : ""
      }`}
    >
      <div
        className={`bio-secondary__content  bio-secondary__content--${side}`}
      >
        <div className={`bio-secondary__text bio-secondary__text--${side}`}>
          <h2>Life is a journey</h2>
          <p className="bio-secondary__description">
            Any journey always starts by taking the first step, contact me now
            to start yours.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BioSecondary
