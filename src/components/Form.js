import React from "react"
import styled from "styled-components"
import breakpoints from "./globals/GlobalBreakpoints"

const FormOuter = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding: 1rem;
`

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 1rem;
  label {
  margin-bottom: 0.5rem;
  }
  input {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  &:focus {
  outline: none;
  }
  }
  
`

const NameWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2%;
  
`

export default function Form() {
  return (
    <FormOuter action="">
      <NameWrapper>
        <FormBox>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
        </FormBox>

        <FormBox>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </FormBox>



      </NameWrapper>

      <FormBox >
        <label htmlFor={'phone'} >Phone Number</label>
        <input  type={'tel'} id={'phone'}/>
      </FormBox>
    </FormOuter>
  )
}
