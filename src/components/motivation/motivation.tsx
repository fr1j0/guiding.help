import React from "react"
import "./styles.sass"

type Props = {
  header: string
  description: string
}

const Motivation = ({ header, description }: Props) => {
  return (
    <section className="motivation">
      <div className="motivation__content">
        <h2>{header}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Motivation
