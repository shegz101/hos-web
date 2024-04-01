import { Box, Text } from "@chakra-ui/react"
import logo from '../../assets/BEEBATLOGO2.svg'

const Nav = () => {
  return (
   <Box>
      <Box>
        <img src={logo} alt="Beebat Logo"/>
      </Box>
      <Text color="blue">Beebat Logo</Text>
   </Box>
  )
}

export default Nav
