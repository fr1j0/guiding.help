import { Link } from "gatsby"
import React from "react"
import "./styles.sass"

type ServiceText = {
  title: string
  link: string
}

const servicesTxts: ServiceText[] = [
  {
    title: "General Counselling",
    link: "services/#general-counselling",
  },
  {
    title: "Sexual Abuse",
    link: "services/#sexual-abuse",
  },
  {
    title: "Grief and Bereavement",
    link: "services/#grief-and-bereavement",
  },
  {
    title: "Children and Adolescents",
    link: "services/#children-and-adolescents",
  },
  {
    title: "Depression",
    link: "services/#depression",
  },
]

const ServicesPods = () => {
  return (
    <section className="services-pods">
      <h2>How I can help you</h2>

      <ul className="services-pods__list">
        {servicesTxts.map(({ link, title }, index) => (
          <li key={index}>
            <Link to={link}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ServicesPods
