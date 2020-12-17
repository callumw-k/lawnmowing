import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`

  html {
    font-family: 'Montserrat';
    color: var(--black);
    font-size: 16px;
  }
  p, li {
    letter-spacing: 0.5px;
    line-height: 2rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
  
  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  
`

export default Typography
