import './App.css'
import Footer from "./components/layout/Footer/Footer"
import Header from "./components/layout/Header/Header"
import Portfolio from './components/sections/Portfolio'
import Profile from './components/sections/Profile'
import Skills from './components/sections/Skills'
import Top from "./components/sections/Top/Top"

function App() {
  return (
    <>
      <Header></Header>
      <Top/>
      <Profile/>
      <Portfolio/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
