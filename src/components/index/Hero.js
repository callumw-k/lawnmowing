import React from "react"
import styled from "styled-components"
import Rubbish from "../../images/grass-background.jpg"
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

const TitleWrapper = styled.div``

const TitleWrapperInner = styled.div`

  padding: 2.5rem;
  border-radius: 10px;

  border: 2px solid white;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: white;
  margin-bottom: 0;
  font-weight: bold;

  z-index: 999;
`

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroInner>
        <TitleWrapper>
          <TitleWrapperInner>
            <Title>Montrose Gardening</Title>
          </TitleWrapperInner>
        </TitleWrapper>
      </HeroInner>
    </HeroWrapper>
  )
}
