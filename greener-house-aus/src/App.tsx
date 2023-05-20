import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}> /</Route>
          <Route path="/about" element={<AboutPage/>}> /</Route>
          <Route path="/contact" element={<ContactPage/>}> /</Route>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
