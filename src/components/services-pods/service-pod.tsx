import React from "react"

type Props = {
  title: string
}

const ServicePod = ({ title }: Props) => {
  return <h3>{title}</h3>
}

export default ServicePod
