import React from "react"
import "./styles.sass"

type Props = {
  header: string
  description: string
}

const Motivation = ({ header, description }: Props) => {
  return (
    <div className="motivation">
      <div className="motivation__content">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Motivation
