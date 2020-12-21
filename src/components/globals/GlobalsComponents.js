import styled from "styled-components"
import { Link } from "gatsby"

const ButtonLink = styled(Link)`
  --background: #5CA4A9;
  --font: white;

  display: inline-block;
  color: white;
  background-color: var(--background);

  transition-duration: 250ms;
  transition-property: box-shadow;
  padding: 0.75rem 1rem;
  border-radius: 10px;

  &:hover {
    box-shadow: 0px 11px 28px -16px rgba(0, 0, 0, 0.75);
    background: var(--background);
    color: var(--font);
  }
  text-decoration: none;
`

const CentreContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 95%;
`

const GlobalComponents = {
  ButtonLink: ButtonLink,
  CentreContent: CentreContent,
}

export default GlobalComponents
