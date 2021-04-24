import React from "react"
import ServicePod from "./service-pod"
import "./styles.sass"

type ServiceText = {
  title: string
}

const servicesTxts: ServiceText[] = [
  {
    title: "General Counselling",
  },
  {
    title: "Sexual Abuse",
  },
  {
    title: "Grief and Bereavement",
  },
  {
    title: "Children and Adolescents",
  },
  {
    title: "Depression",
  },
]

const ServicesPods = () => {
  return (
    <div className="services-pods">
      <h2>How I can help you</h2>

      <ul className="services-pods__list">
        {servicesTxts.map(({ title }, index) => (
          <li className="service-pod" key={index}>
            <ServicePod title={title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesPods
