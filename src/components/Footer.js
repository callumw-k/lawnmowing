import React from "react"
import styled from "styled-components"
import breakpoints from "./globals/GlobalBreakpoints"

const FooterWrapper = styled.footer``

const FooterInner = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  grid-template-columns: repeat(3, 33%);
  
  @media (max-width: ${breakpoints.sm}) {
  grid-template-columns:
  }
  
`

const FooterCol = styled.div`
  h3 {
  font-weight: bold;
  }
`

const FooterCol1 = styled(FooterCol)`
  border: 1px solid #ff0000;
  h3 {
  font-weight: bold;
  }
`;

const FooterCol2 = styled(FooterCol)`
  border: 1px solid red;
`;

const FooterCol3 = styled(FooterCol)`
  border: 1px solid red;
`;



export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterCol1 FooterCol>
          <h3>Links</h3>
          <p>This is the first col</p>
        </FooterCol1>
        <FooterCol2>
          <h3>About Us</h3>
          <p>This is the second col</p>
        </FooterCol2>
        <FooterCol3>
          <h3>Contact Us</h3>
          <p>This si the third col</p>
        </FooterCol3>
      </FooterInner>
    </FooterWrapper>
  )
}
