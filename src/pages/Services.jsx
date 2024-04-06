import { Box, Text, Flex } from "@chakra-ui/react";
import asthma from "../assets/Asthma.svg";
import checkup from "../assets/CheckUp.svg";
import chickenpox from "../assets/ChickenPox.svg";
import malaria from "../assets/Malaria.svg";
import medicalIcon from "../assets/MedicalIcon.svg";
import tuberculosis from "../assets/Tuberculosis.svg";

const Services = () => {
  return (
    <Box mt="15px" mx={{base: "15px", md: "100px"}}>
        <Text textAlign={"center"} fontWeight={"bold"} mb={"15px"} fontSize={{ base:"20px", md:"35px"}} color="#000000">Our Services</Text>
        <Flex flexDirection={{base:"column", md:"row"}} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"} gap={"20px"}>
          {[
            {img: medicalIcon,  title:"Physical Health", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
            {img: tuberculosis,  title:"Tuberculosis", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
            {img: asthma,  title:"Asthma", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
            {img: chickenpox,  title:"Chicken pox", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
            {img: malaria,  title:"Malaria", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
            {img: checkup,  title:"Medical Checkup", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
          ].map((item, index) => (
            <Flex bg={"#DCE7F2"} key={index} color={"#000000"} border={"5px solid #0085FF"} width={"300px"} borderRadius={"20px"} 
            flexDirection={"column"} alignItems={"center"} gap="10px" p={"15px 15px"} height={"300px"}
            >
              <Box as="img" src={item.img} alt={item.title} w={item.img === chickenpox || item.img === malaria ? "110px" : "130px"}/>
              <Text textAlign={"center"} fontWeight={"700"}>{item.title}</Text>
              <Text textAlign={"center"}>{item.description}</Text>
            </Flex>
          ))
          }
        </Flex>
    </Box>
  )
}

export default Services
