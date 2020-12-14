import React from "react"
import styled from "styled-components"
import GlobalComponents from "./GlobalsComponents"

const ContentOuter = styled.section`
  padding: 2rem 0;
`

const ContentInner = styled(GlobalComponents.CentreContent)`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export default function CentredContentBlock(props) {
  return (
    <ContentOuter>
      <ContentInner>{props.children}</ContentInner>
    </ContentOuter>
  )
}
