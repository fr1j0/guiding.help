import React from "react"

type Props = {
  title: string
  description: string
}

const Service = ({ title, description }: Props) => {
  return (
    <>
      <h3>{title}</h3>
      {/* <p>{description}</p> */}
    </>
  )
}

export default Service
