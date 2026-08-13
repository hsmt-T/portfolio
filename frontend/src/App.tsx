import './App.css'
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Form from './components/sections/Form'
import Interns from './components/sections/Interns'
import Message from './components/sections/Message'
import Portfolio from './components/sections/Portfolio'
import Profile from './components/sections/Profile'
import Skills from './components/sections/Skills'
import Top from "./components/sections/Top"
import Works from './components/sections/Works'

function App() {
  return (
    <>
      <Header></Header>
      <Top/>
      <Profile/>
      <Portfolio/>
      <Works/>
      <Skills/>
      <Interns/>
      <Message/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
