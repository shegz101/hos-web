import { Box, Flex, Text, useDisclosure, useMediaQuery, } from "@chakra-ui/react"
import DrawerNav from "./DrawerNav";
import logo from '../../assets/BEEBATLOGO2.svg'
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi"

const Nav = () => {
  const { isOpen: drawerIsOpen, onOpen: drawerOnOpen, onClose: drawerOnclose } = useDisclosure()
  const [isLargerThan600] = useMediaQuery('(max-width: 1200px)')

  const location = useLocation();
  const currentPath = location.pathname;

  const handleDrawer = () => { 
    drawerOnOpen()
  }

  return (
   <Box
    position="fixed"
    top={"0"}  
    w="100%"
    transition="top 0.5s"
    background={"white"}
    backdropFilter="blur(10px)"
    zIndex={"200"}
    left="0"
    as="nav"
    py={"16px"}
    boxShadow="0px 2px 2px 2px #00000033"
    px={{base: "15px", md: "100px"}}
    border={"1px solid #EFF4FF"}
    borderBottom={"none"}
   >
    <Flex
      as="nav"
      color="#43413A"
      alignItems="center"
      justifyContent="space-between"
      maxW="1350px"
      mx="auto"
    >
      <Box flex="0.7">
        <Box flex="1">
          <Link to="/">
            <Box as="img" src={logo} w={{base:"140px", md:"150px"}} alt="Beebat Logo" />
          </Link>
        </Box>
      </Box>
      {/* <Text color="blue">Beebat Logo</Text> */}

      <Flex display={{base: "flex", lg: "none"}} boxShadow= "4px 4px 4px 0px #DEA54B1F" border="1px solid #EFF4FF" p="10px" borderRadius={"50%"}  fontSize="30px" onClick={handleDrawer} color="#192328"> 
        <HiOutlineMenu fontSize="20px" />
      </Flex>

      <Flex  flex="2"  gap="12px" justifyContent="center" fontWeight="700" alignItems={"center"}  display={{ base: "none", lg: "flex" }}>     
        {[
            { text: "Home", href: "/" },
            { text: "About Us", href: "/about" },
            { text: "Services", href: "/services" },
            { text: "Contact Us", href: "mailto:Odufowokelateef6@gmail.com" },
          
        ].map((item, index) => (
          <Link to={item.href} key={index}>
            <Text
              fontSize="16px"
              transition="0.5s"
              fontWeight="400"
              color={(currentPath === item.href) ? "#0085FF" : "#040E22"}
              p="10px"
            >
              {item.text}
            </Text>
          </Link>
        ))}
      </Flex>
      
      <Flex
      gap="58px"
      alignItems="center"
      display={{ base: "none", lg: "flex" }}
      flex="0.7"
      justifyContent={"flex-end"}
      >
        <Link to="mailto:Odufowokelateef6@gmail.com" style={{ outline:"none"}}>
          <Box
          as={"Button"}
          p="13px 28px"
          w="max-content"
          h="48px"
          borderRadius="11px"
          cursor={{base: "default", md: "pointer"}}
          bg="#0085FF"
          transition={"0.5s ease"}
          color="white"
          _hover={{opacity:"0.8"}}
          fontWeight={"500"}
          fontSize={{base: "13px", md: "16px"}}
          >
            Book an Appointment
          </Box>
        </Link>
      </Flex>
      {isLargerThan600 ?
        // Sidebar
        <DrawerNav
            drawerOnClose={drawerOnclose}
            drawerIsOpen={drawerIsOpen}
        />

        : ""
      }
    </Flex>
   </Box>
  )
}

export default Nav
