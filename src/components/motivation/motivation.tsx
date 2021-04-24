import React from "react"
import "./styles.sass"

type Props = {
  color: string
  header: string
  description: string
}

const Motivation = ({ color, header, description }: Props) => {
  return (
    <div className="motivation" style={{ backgroundColor: color }}>
      <div className="motivation__content">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Motivation
