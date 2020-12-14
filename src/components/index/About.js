import React from "react"
import CentredContentBlock from "../globals/CentredContentBlock"

const pStyle = {
  textAlign: 'center'
}



export default function About() {
  return (
    <CentredContentBlock>
      <h1>Looking to get your dirty work done?</h1>
      <p style={pStyle}>
        If you've got a clean-up job in-front of you that you want done, give us
        a call. We specialise in fast and efficient rubbish removal services.
      </p>
    </CentredContentBlock>
  )
}
