import { Box, Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";
import contactImage from "../assets/ContactUs.svg";

const ContactUs = () => {
  return (
    <Flex id="contact" mx={{ base: "15px", md: "100px" }} gap={{ base: "20px", md: "40px" }} mt="40px" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-between">
      {/* Left Column for Image */}
      <Flex width={{ base: "100%", md: "calc(55% - 20px)" }} display={{base:"none", md:"block"}} pl={{ base: "0", md: "20px" }} alignItems="center">
          <Box as="img" src={contactImage} borderRadius={"20px"} alt="Contact Us Image" w="100%" h="500px" objectFit="cover" />
      </Flex>

      {/* Right Column for Text and Form */}
      <Box width={{ base: "100%", md: "calc(50% - 20px)" }} gap="15px" alignItems={"center"} flexDirection={"column"} pr={{ base: "0", md: "20px" }}>
        {/* Contact Us Text */}
        <Text fontWeight="bold" fontSize={"30px"} color="#0085FF" mb="10px">
          Contact Us
        </Text>

        {/* Lorem Ipsum Text */}
        <Text color="#000000" mb="20px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
        </Text>

        {/* Form */}
        <Box as="form">
          {/* Name Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Name</Text>
            <Input type="text" bg={"#DCE7F2"} placeholder="Enter your name" />
          </Box>

          {/* Phone Number Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Phone Number</Text>
            <Input type="tel" bg={"#DCE7F2"} placeholder="Enter your phone number" />
          </Box>

          {/* Email Address Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Email Address</Text>
            <Input type="email" bg={"#DCE7F2"} placeholder="Enter your email address" />
          </Box>

          {/* Message Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Message</Text>
            <Textarea bg={"#DCE7F2"} placeholder="Enter your message" resize="vertical" />
          </Box>

          {/* Submit Button */}
          <Button w="100%" mt="10px" bg="#0085FF" color={"white"} borderRadius={"5px"} type="submit">Send</Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactUs;

      