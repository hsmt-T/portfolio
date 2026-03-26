import './App.css'
import Footer from "./components/layout/Footer/Footer"
import Header from "./components/layout/Header/Header"
import Form from './components/sections/Form'
import Portfolio from './components/sections/Portfolio'
import Profile from './components/sections/Profile'
import Skills from './components/sections/Skills'
import Top from "./components/sections/Top/Top"
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
      <Form/>
      <Footer/>
    </>
  )
}

export default App
