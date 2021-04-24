import React from "react"
import Service from "./service"
import "./styles.sass"

type ServiceText = {
  title: string
  description: string
}

const servicesTxts: ServiceText[] = [
  {
    title: "General Counselling",
    description:
      "The counselling process is a planned, structured dialogue between a counsellor and a client. It is a cooperative process in which a trained professional helps a person called the client to identify sources of difficulties or concerns that he or she is experiencing.",
  },
  {
    title: "Sexual Abuse",
    description:
      "Counsellors who help survivors are trained to help with the psychological effects of sexual violence. This may include low confidence levels, anxiety, depression or post-traumatic stress disorder (PTSD). You can speak to a counsellor at any time - even if you experienced sexual abuse many years ago.",
  },
  {
    title: "Grief and Bereavement",
    description:
      "Your bereavement counsellor will help you better understand the grieving process, process your grief, and assist you in working through the stages of grief. Your therapist will support you to work through difficult feelings around your loss. How does bereavement counselling work? Typically a counsellor or psychologist will encourage the grieving person to share their thoughts and feelings about the loss, and encourage them to engage with life in a way which helps them to recover from their grief.",
  },
  {
    title: "Children and Adolescents",
    description:
      "Child counseling is a type of therapy that focuses on young children, teens, and adolescents with one or more mental illnesses. It also provides aid to youths, who have experienced trauma, and/or who are experiencing a dysfunctional or stressful home environment",
  },
  {
    title: "Depression",
    description:
      "Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities you once enjoyed. It can lead to a variety of emotional and physical problems and can decrease your ability to function at work and at home. If there is no underlying medical cause for your symptoms of depression, talk therapy (counselling/coaching) can be an extremely effective treatment. What you learn in therapy gives you skills and insight to feel better and help prevent depression from coming back",
  },
]

const Services = () => {
  return (
    <div className="services">
      <h2>How I can help you</h2>

      <ul className="services__list">
        {servicesTxts.map(({ title, description }, index) => (
          <li className="service" key={index}>
            <Service title={title} description={description} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
