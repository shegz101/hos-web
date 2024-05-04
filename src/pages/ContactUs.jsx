import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Box, Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";
import contactImage from "../assets/ContactUs.svg";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_img0y2r', 'template_z11yo8i', form.current, {
        publicKey: 'BCvseqzBryJh7ElBH',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
    );
    e.target.reset();
  };

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
          Your gateway to connecting with our healthcare experts and support staff. Whether you have questions about our services, 
          need assistance with appointments, or wish to provide feedback, we're here to help.
        </Text>

        {/* Form */}
        <Box as="form" ref={form} onSubmit={sendEmail}>
          {/* Name Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Name</Text>
            <Input type="text" bg={"#DCE7F2"} name="user_name" placeholder="Enter your name" />
          </Box>

          {/* Email Address Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Email Address</Text>
            <Input type="email" bg={"#DCE7F2"} name="user_email" placeholder="Enter your email address" />
          </Box>

          {/* Subject Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Subject</Text>
            <Input type="text" bg={"#DCE7F2"} name="subject" placeholder="Enter the subject/title of your mail" />
          </Box>

          {/* Message Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Message</Text>
            <Textarea bg={"#DCE7F2"} placeholder="Enter your message" name="message"  resize="vertical" />
          </Box>

          {/* Submit Button */}
          <Button w="100%" mt="10px" bg="#0085FF" color={"white"} borderRadius={"5px"} type="submit">Send</Button>
        </Box>
      </Box>
    </Flex> 
  );
};

export default ContactUs;

      