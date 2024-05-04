import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Box, Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";
import contactImage from "../assets/ContactUs.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.user_name === '' || formData.user_email === '' || formData.subject === '' || formData.message === '') {
      toast.error("Please fill in all fields!");
      return;
    } else {
      emailjs
      .sendForm('service_img0y2r', 'template_z11yo8i', form.current, {
        publicKey: 'BCvseqzBryJh7ElBH',
      })
      .then(
        () => {
          toast.success("Successfully");
        },
        (error) => {
          toast.error('FAILED...', error.text)
        },
      );
    }

    e.target.reset();
    setFormData({
      user_name: '',
      user_email: '',
      subject: '',
      message: '',
    });
  };

  const isDisabled = Object.values(formData).some((value) => value === '');

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
            <Input type="text" bg={"#DCE7F2"} name="user_name" placeholder="Enter your name" value={formData.user_name} onChange={handleChange}/>
          </Box>

          {/* Email Address Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Email Address</Text>
            <Input type="email" bg={"#DCE7F2"} name="user_email" placeholder="Enter your email address" value={formData.user_email} onChange={handleChange}/>
          </Box>

          {/* Subject Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Subject</Text>
            <Input type="text" bg={"#DCE7F2"} name="subject" placeholder="Enter the subject/title of your mail" value={formData.subject} onChange={handleChange}/>
          </Box>

          {/* Message Input */}
          <Box mb="15px">
            <Text fontWeight="medium">Message</Text>
            <Textarea bg={"#DCE7F2"} placeholder="Enter your message" name="message"  resize="vertical" value={formData.message} onChange={handleChange}/>
          </Box>

          {/* Submit Button */}
          <Button w="100%" mt="10px" bg="#0085FF" color={"white"} borderRadius={"5px"} type="submit" disabled={isDisabled}>Send</Button>
        </Box>
      </Box>
    </Flex> 
  );
};

export default ContactUs;

      