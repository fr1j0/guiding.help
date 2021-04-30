import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./styles.sass"

type Props = {
  background: boolean
  side: "right" | "left"
  title: string
  description: string
}

const BioSecondary = ({ background, side, title, description }: Props) => {
  console.log(side)
  return (
    <section
      className={`bio-secondary ${
        background ? "bio-secondary--background" : ""
      }`}
    >
      <div
        className={`bio-secondary__content  bio-secondary__content--${side}`}
      >
        <div className={`bio-secondary__text bio-secondary__text--${side}`}>
          <h2>{title}</h2>
          <p className="bio-secondary__description">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default BioSecondary
