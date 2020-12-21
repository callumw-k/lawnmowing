import React from "react"
import styled from "styled-components"
import CentreContent from "../globals/CentreContent"

const AboutWrapper = styled(CentreContent)`
  h2 {
    text-align: center;
  }
`

export default function About() {
  return (
    <AboutWrapper>
      <h2>Lawn Care</h2>
      <p>
        We love the passion and enthusiasm many of you show for your lawns.
        There’s even a select few of you that take this to a whole other level.
        Are you one of these people? Do you leave your neighbours scratching
        their heads in spring when you seemingly destroy a perfectly
        good-looking lawn in the name of a reno?
      </p>
      <p>How many of the following can you relate to?…</p>
      <p>
        You have a range of photos on your phone of your lawn from multiple
        angles ready to utilise or show when required.
      </p>
    </AboutWrapper>
  )
}
