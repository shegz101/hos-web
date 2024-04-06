import { Box, Text, Flex } from "@chakra-ui/react";
import aboutImg from "../assets/AboutUs.svg";

const AboutUs = () => {
  return (
    <Box id="about" mt="40px" py={"35px"} width="100%" bg="#DCE7F2">
      <Box mx={{base:"15px", md:"100px"}}>
        <Text textAlign="center" fontWeight="600" mb="15px" fontSize={{ base: "20px", md: "30px" }} color="#000000">
          About Us
        </Text>
        <Flex gap="40px" w="100%" flexDirection={{ base: "column", md: "row" }} justifyContent="space-between">
          <Flex width={{ base: "100%", md: "calc(45% - 20px)" }} gap="15px" alignItems={"center"} flexDirection={"column"} pr={{ base: "0", md: "20px" }}>
            <Text textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            </Text>

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
          </Flex>
          <Flex width={{ base: "100%", md: "calc(55% - 20px)" }} pl={{ base: "0", md: "20px" }} alignItems="center">
            <Box as="img" src={aboutImg} alt="Anout Us Image" w="100%" h="255px" objectFit="cover" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;