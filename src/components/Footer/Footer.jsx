import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import { useRef } from "react";
import logo from "../../assets/BEEBATLOGO2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const hospital = [
    { name: "About Us", url: "#about", ref: aboutUsRef },
    { name: "Our Services", url: "#services", ref: servicesRef },
  ];

  const contact = [{ name: "Contact Us", url: "#contact", ref: contactUsRef }];

  const sections = [
    {
      title: "Hospital",
      item: hospital,
    },
    {
      title: "Contact",
      item: contact,
    },
  ];

  return (
    <Box
      bg="#DCE7F2"
      w="100%"
      mt="60px"
      py="20px"
      border="1px solid rgba(209, 216, 228, 0.2)"
      borderRadius={{ base: "20px 20px 0 0", md: "40px 40px 0 0" }}
    >
      <Flex
        mx={{ base: "15px", md: "100px" }}
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box flex="0.7">
          <Box flex="1">
            <Link to="/">
              <Box as="img" src={logo} w={{ base: "140px", md: "150px" }} alt="Beebat Logo" />
            </Link>
          </Box>
          <Text pt="10px" color="#000000" fontWeight="500">
            2, Jimoh - Ojora Street, Off Ojo Road,<br/>
            Ajegunle Apapa, Lagos, Nigeria<br/>
            lateef.odufowoke@yahoo.com<br/>
            08033038477, 08098038477
          </Text>
        </Box>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ base: "40px", md: "150px" }}
          mt={{ base:"20px", md:"0px"}}
        >
          {sections.map((section, index) => (
            <Box key={index}>
              <Text color="#000000" fontSize={{ base: "16px", md: "20px" }} fontWeight="700" mb={"16px"}>
                {section.title}
              </Text>

              <Flex flexDirection="column" gap="15px">
                {section.item.map((link, index) => (
                  <Box key={index}>
                    <Link to={link.url}>
                      <Text
                        as="a"
                        href={link.url}
                        color={"#000000"}
                        fontWeight="400"
                        // w="fit-content"
                        fontSize={{ s: "14px", md: "16px" }}
                        cursor="pointer"
                        transition="0.5s ease"
                        onClick={() => scrollToRef(link.ref)}
                        // _hover={{ color: 'gold.200', boxShadow: 'inset -50px 0 0 0 #766B38' }}
                      >
                        {link.name}
                      </Text>
                    </Link>
                  </Box>
                ))}
              </Flex>
            </Box>
          ))}
        </Grid>
      </Flex>

      <Flex pt="32px" gap="17px" mx={"30px"} justifyContent={"space-between"} alignItems="center" flexDirection="column">
        <Text color="#000000" fontSize={{ s: "14px", md: "15px" }} fontWeight={"400"}>
          Copyright © {currentYear} Beebat Medical Centre. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
