import { Container } from "react-bootstrap"
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<HomePage/>}> /</Route>
          <Route path="/about" element={<AboutPage/>}> /</Route>
          <Route path="/contact" element={<ContactPage/>}> /</Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
