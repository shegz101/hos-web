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
          <Flex mt="20px" width={{ base: "100%", md: "calc(45% - 20px)" }} gap="15px" alignItems={"center"} flexDirection={"column"} pr={{ base: "0", md: "20px" }}>
            <Text textAlign="justify">
              At <span style={{ color:"#0085FF"}}>Beebat Medical Center</span>, our objective is to provide excellent medical care using advanced technology 
              and highly skilled professionals. We are committed to delivering compassionate and innovative healthcare 
              services to our community, embodying values of integrity and care.
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