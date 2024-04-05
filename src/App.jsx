import { Box } from '@chakra-ui/react'
import Nav from './components/Header/Nav'
import Hero from './pages/Hero.jsx'
import Services from './pages/Services'

function App() {
  return (
    <Box>
      <Nav/>
      <Hero/> 
      <Services/>
    </Box>
  )
}

export default App
