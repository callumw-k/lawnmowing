import React from "react"

import Hero from "../components/index/Hero"
import About from "../components/index/About"
import Form from "../components/Form"
import MyForm from "../components/DefaultForm"




export default function Home() {



  return (
    <React.Fragment>
      <Hero />
      <About />
      <Form/>
      <MyForm/>


    </React.Fragment>
  )
}
