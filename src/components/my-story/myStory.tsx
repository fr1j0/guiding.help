import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./styles.sass"

const MyStory = () => {
  return (
    <section className="my-story">
      <StaticImage
        className="my-story-image"
        src="../../images/jo2.jpg"
        width={250}
        height={400}
        quality={100}
        alt="Guiding help"
        layout="fixed"
        placeholder="none"
      />
      <div className="my-story__text">
        <h1>This is my life journey</h1>
        <p>
          My experiences have given me a genuine empathy and a real desire to
          support and guide people on the path to recovery. My goal is to be a
          safe haven to anybody who needs it, you are not alone. I’m
          approachable and do not judge. I have chosen to specialize in the
          fields in which I have experience in. My guiding structure enables my
          clients to access their full potential. I assist them in making
          positive changes within themselves, to unleash their inner, happier
          self. During my sessions my clients discover the answers they need to
          move forward mentally, emotionally and physically. The power to take
          back control and to lead a healthier, happier life is within all of
          us. All you need is the guidance on how to access it.
        </p>
        <p>
          From a very young age I would quickly realize that life would not
          always be easy. A very traumatic experience as a child (one in which I
          did not deal with until later in life) and then being bullied at high
          school was to be the start of my mental health journey. Along with
          this, the separation of my parents, reinforced a sense of instability
          in what was otherwise a loving, happy and supportive childhood. From
          these now shaky grounds I became a young single mum, living on my own
          and having to grow up rapidly. These were some of my most difficult
          years.
        </p>
        <p>
          Following the breakup with my child’s father and having to move to a
          place of safety, it was here where my mental health really took
          control of me. At the age of 18 I started to suffer with anxiety and
          panic attacks daily and to this day now almost 34 years later I still
          battle with this. I become afraid to go out and confrontation was a no
          no.
        </p>
        <p>
          There were times when trying to buy a tin of beans would present a
          real challenge for me. I had lost all confidence in myself and the
          world around me. I was heavily medicated which just made daily
          activities even more difficult. One day whilst frantically trying to
          take an anti-anxiety medication I looked at myself in the mirror and
          just said NO. No more. I had two choices, I could allow the events of
          my life to beat me here and now or I could stop, turn and face them
          and take back the control I had lost. I chose to find a way back to my
          inner happier self and to master control over my mental health issues.
          For many years I struggled, I had counselling and slowly bit by bit I
          regained control over all my anxieties and day by day I became
          stronger and stronger.
        </p>
        <p>
          Setting myself small achievable goals and celebrating the completion
          of them. I completed my degree at university and landed my dream job
          (children’s nursing). This wasn’t to be the end of my struggles! I had
          to face more abusive relationships and the loss of my mother to a
          terminal illness. The difference now though was I had some learned
          skills which enabled me to cope better and see the signs for when I
          would need help. This time things were different I was more in
          control, however, that does not mean that my anxieties or fears
          totally went away. They are still with me but no longer have control,
          I control them. Today it’s my turn to give back and to show everyone
          that there is a light at the end of the tunnel. If I can do it, so can
          you.{" "}
        </p>
        <p>Let me be that guide.</p>
      </div>
      <StaticImage
        className="my-story-signature"
        src="../../images/signature.png"
        width={125}
        quality={100}
        alt="Joanne"
        layout="fixed"
        placeholder="none"
      />
    </section>
  )
}

export default MyStory
