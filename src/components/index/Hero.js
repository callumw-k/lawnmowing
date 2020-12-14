import React from "react"
import styled from "styled-components"
import Rubbish from "../../images/rubbish-truck.png"
import GlobalComponents from "../globals/GlobalsComponents"

const HeroWrapper = styled.div`
  padding: 1em;
  position: relative;
  height: 75vh;
  background-image: url(${Rubbish});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const HeroInner = styled(GlobalComponents.CentreContent)`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
  padding: 2.5rem;
  border-radius: 10px;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: black;
`

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroInner>
        <TitleWrapper>
          <Title>The #1 Rubbish Removalist in Ballarat</Title>
          <GlobalComponents.ButtonLink to="/contact">
            This is a link
          </GlobalComponents.ButtonLink>
        </TitleWrapper>
      </HeroInner>
    </HeroWrapper>
  )
}
