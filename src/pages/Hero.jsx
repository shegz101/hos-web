import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import docImg from "../assets/DocBg.svg";

const Hero = () => {
  return (
    <Box pos="relative" maxH={{ base:"600px", md:"500px"}} mt={{base:"30px", md:"none"}} overflow="hidden">
      {/* Background image */}
      <Box as="img" src={docImg} w="100%" h="100%" alt="Hero Bg" />

      {/* Overlay with text and button */}
      <Box
        pos="absolute"
        top={{base:"18px", md:"50px"}}
        left="0"
        w="100%"
        h={{ base:"100%", md:"100%"}}
        bg="rgba(0, 0, 0, 0.5)" // Overlay color with opacity
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          pos="relative" // Add relative positioning to maintain z-index order
          h="100%" // Ensure the Flex container takes full height of the overlay
        >
          {/* Text */}
          <Text
            color="white"
            fontSize={{ base: "30px", md: "72px" }}
            fontFamily="Pathway Gothic One, sans-serif"
            fontWeight="medium"
            textAlign="center"
            zIndex="1" // Ensure text is above the overlay
          >
            Caring for Your <span style={{ color: "#0085FF" }}>Medical Health</span>,<br/>
            <span style={{ color: "#0085FF" }}> One Step</span> at a Time
          </Text>

          {/* Button */}
          <Link to="mailto:Odufowokelateef6@gmail.com" style={{ outline: "none" }}>
            <Box
              as="button"
              p="13px 28px"
              borderRadius="11px"
              cursor="pointer"
              bg="white"
              color="#0085FF"
              transition="0.5s ease"
              fontWeight="500"
              fontSize={{ base: "13px", md: "16px" }}
              zIndex="1" // Ensure button is above the overlay
              _hover={{ opacity: "0.8" }}
            >
              Book an Appointment
            </Box>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;