import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./styles.sass"

type Props = {
  side: "right" | "left"
  title: string
  description: string
}

const BioSecondary = ({ side, title, description }: Props) => {
  return (
    <section className={`bio-secondary bio-secondary--${side}`}>
      {side === "left" && (
        <StaticImage
          className={`bio-secondary-image`}
          src="../../images/jo4.jpg"
          alt=""
          placeholder="blurred"
          layout="fullWidth"
        />
      )}
      <div className={`text_block bio-secondary__text`}>
        <h2>{title}</h2>
        <p className="bio-secondary__description">
          {side === "left" ? (
            <>
              <p>
                For many years I had suffered from anxiety and panic attacks
                which, at times, have completely overwhelmed me.
              </p>
              <p>
                Today, I have an arsenal of techniques to control and, on many
                occasions, stop these attacks from happening. Let me share this
                with you so you too can regain control
              </p>
            </>
          ) : (
            <>
              <p>
                Counselling can help you to deal with difficulties that you are
                facing and to gain a deeper insight into yourself. My passion is
                helping people find peace, meaning and hope in their lives.{" "}
              </p>
              <p>
                Therapy helps you gain a different perspective on experiences
                and issues and gives you time and space to work through your
                problems.
              </p>
            </>
          )}
        </p>
      </div>
      {side === "right" && (
        <StaticImage
          className={`bio-secondary-image`}
          src="../../images/jo3.jpg"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={500}
        />
      )}
    </section>
  )
}

export default BioSecondary
