import { Box } from '@chakra-ui/react'
import Nav from './components/Header/Nav'
import Hero from './pages/Hero.jsx'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs.jsx'

function App() {
  return (
    <Box>
      <Nav/>
      <Hero/> 
      <Services/>
      <AboutUs/>
    </Box>
  )
}

export default App
