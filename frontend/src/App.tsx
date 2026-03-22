import './App.css'
import Footer from "./components/layout/Footer/Footer"
import Header from "./components/layout/Header/Header"
import Profile from './components/sections/Profile'
import Top from "./components/sections/Top/Top"

function App() {
  return (
    <>
      <Header></Header>
      <Top/>
      <Profile/>
      <Footer/>
    </>
  )
}

export default App
