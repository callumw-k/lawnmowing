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

export default class Form extends React.Component {
  state = {
    status: "",
  }

  submitForm =(ev) => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }

  render() {
    const { status } = this.state
    return (
      <FormOuter
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xknppgdo"
        method="POST"

      >
        <NameWrapper>
          <FormBox>
            <label htmlFor="first-name">First Name</label>
            <input name={'First Name'} type="text" id="first-name" />
          </FormBox>

          <FormBox>
            <label htmlFor="last-name">Last Name</label>
            <input name={'Last Name'} type="text" id="last-name" />
          </FormBox>
        </NameWrapper>

        <FormBox>
          <label htmlFor={"phone"}>Phone Number</label>
          <input name={'Telephone Number'} type={"tel"} id={"phone"} />
        </FormBox>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </FormOuter>
    )
  }
}
