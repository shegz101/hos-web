import React, { useRef } from 'react'
import {
     Drawer, Flex, Text,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    Box,
} from "@chakra-ui/react"
import logo from '../../assets/BEEBATLOGO2.svg'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai"


const DrawerNav = ({ drawerOnClose, drawerIsOpen }) => {
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    }); 
    drawerOnClose
  };

  
  const handleLinkClick = (ref) => {
    if (ref !== null) {
        scrollToRef(ref);
    }
    drawerOnClose
  };

    return (
        <Drawer onClose={drawerOnClose}  placement="top" isOpen={drawerIsOpen} size={{base: "sm", md: "sm"}} >
            <DrawerOverlay />
            <DrawerContent bg="#FEFDFB" boxShadow="0px 4px 10px 3px #00000012">

                <Flex px="20px" pt="32px" alignItems={"center"} justifyContent={"space-between"}>
                    
                    <Link href="/" onClick={drawerOnClose} style={{ outline:"none"}}>
                        <Box as="img" src={logo} w={{base:"140px", md:"150px"}} alt="Beebat Logo" />
                    </Link>

                    <Flex display={{s: "flex", lg: "none"}} boxShadow= "4px 4px 4px 0px #DEA54B1F" border="1px solid #EFF4FF" p="10px" borderRadius={"50%"}  fontSize="30px"   color="#192328"> 
                        <AiOutlineClose fontSize={"20px"} onClick={drawerOnClose}  />
                    </Flex>
                   
                </Flex>
                <DrawerBody  color="#43413A" textAlign={"left"} pb="37px">
                    {[
                        { text: "Home", href: "/", adr:"/" },
                        { text: "About Us", href: "#about", adr:"/#about", ref: aboutUsRef },
                        { text: "Services", href: "#services", adr:"/#services", ref: servicesRef },
                        { text: "Contact Us", href: "#contact", adr:"/#contact", ref: contactUsRef },
                    
                        ].map((item, index) => (
                        <Link key={index} to={item.href} onClick={(e) => {
                  e.preventDefault();
                  drawerOnClose
                  scrollToRef(item.ref);
                }}>
                            <Text
                                mt={{base: "31px", md: "42px"}}  
                                fontSize={{md: "20px"}}  
                                transition="0.5s"
                                fontWeight={"400"}
                                color={"#000000"}
                            >
                                {item.text}
                            </Text>
                        </Link>
                    ))}
                
                    <Link to="mailto:Odufowokelateef6@gmail.com" onClick={drawerOnClose} style={{ outline:"none"}}>
                        <Flex  flexDirection={"column"} gap="24px"  mt="28px" pt="28px">
                            <Box
                            as={"Button"}
                            p="13px 28px"
                            w="200px"
                            h="48px"
                            borderRadius="11px"
                            cursor={{base: "default", md: "pointer"}}
                            bg="#0085FF"
                            transition={"0.5s ease"}
                            color="white"
                            _hover={{opacity:"0.8"}}
                            fontWeight={"500"}
                            fontSize={{base: "13px", md: "16px"}}
                            textTransform={"capitalize"}
                            justifyContent={"center"}
                            border="none"
                            textAlign={'center'}
                            >
                                Book an Appointment
                            </Box>
                        </Flex>
                    </Link>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerNav