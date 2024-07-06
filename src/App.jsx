import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Platform from './components/Platforms/Platform'
import Projects from './components/projects/Projects'
import Form from './components/Form/Form'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      {/* <Skills></Skills> */}
      <Skills></Skills>
      <Platform></Platform>
      <Form></Form>
    
    </div>
  )
}

export default App
