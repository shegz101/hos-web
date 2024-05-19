import { Box, Text, Flex } from "@chakra-ui/react";
import surgicalProcedures from "../assets/SurgicalProcedures.svg";
import immunization from "../assets/Immunization.svg";
import familyPlanning from "../assets/FamilyPlanning.svg";
import ambulance from "../assets/Ambulance.svg";
import familyMedicine from "../assets/FamilyMedicine.svg";
import antenatalCare from "../assets/AntenatalCare.svg";
import preventiveCare from "../assets/PreventiveCare.svg";
import emergencyServices from "../assets/EmergencyServices.svg";

const Services = () => {
  return (
    <Box id="services" style={{ scrollMarginTop:"100px"}} mt="40px" mx={{base: "15px", md: "100px"}}>
        <Text textAlign={"center"} fontWeight={"600"} mb={"15px"} fontSize={{ base:"20px", md:"30px"}} color="#000000">Our <span style={{ color:"#0085FF"}}>Services</span></Text>
        <Flex flexDirection={{base:"column", md:"row"}} flexWrap={"wrap"} justifyContent="center" gap={"30px 45px"} alignItems={"center"}>
          {[
            {img: familyMedicine,  title:"Family Medicine", description:"Our Family Medicine department offers comprehensive primary care for patients of all ages, focusing on preventive health measures, routine check-ups, and managing chronic conditions with personalized care plans tailored to each family member's needs."},
            {img: antenatalCare,  title:"Antenatal care & Delivery", description:"Our Antenatal Care and Delivery services are designed to support expecting mothers through every stage of pregnancy, ensuring a safe and comfortable journey from prenatal care to labor and delivery, with a dedicated team of obstetricians and specialists."},
            {img: surgicalProcedures,  title:"Surgical Procedures", description:"Our Surgical Procedures unit delivers advanced surgical care across a wide range of specialties, employing state-of-the-art techniques and technology to ensure successful outcomes for our patients, all while prioritizing safety and comfort."},
            {img: familyPlanning,  title:"Family Planning", description:"Our Family Planning services empower individuals and couples with comprehensive family planning options, including contraceptive counseling, fertility assessments, and personalized family planning strategies to support their reproductive health goals."},
            {img: preventiveCare,  title:"Preventative Health care", description:"Our Preventative Health Care programs focus on proactive measures to maintain optimal health and prevent illness, offering screenings, vaccinations, health education, and lifestyle guidance to promote well-being and longevity."},
            {img: immunization,  title:"Immunization", description:"Our Immunization services provide a comprehensive range of vaccinations for individuals of all ages, following national immunization guidelines to protect against infectious diseases and promote community health and resilience."},
            {img: emergencyServices,  title:"Emergency Services", description:"Our Emergency Services department is equipped to handle medical emergencies 24/7, with a skilled team of emergency physicians, nurses, and staff ready to provide prompt and effective care in critical situations, ensuring rapid assessment, treatment, and stabilization."},
            {img: ambulance,  title:"Ambulance", description:"Our Ambulance services offer swift and reliable medical transportation for patients in need, with highly trained paramedics and state-of-the-art ambulances equipped to provide emergency medical care en route to our hospital or other healthcare facilities."},
          ].map((item, index) => (
            <Flex bg={"#DCE7F2"} key={index} color={"#000000"} border={"5px solid #0085FF"} width={{ base:"95%", md:"320px"}} borderRadius={"20px"} 
            flexDirection={"column"} p={"15px 10px"} height={{base:"max-content", md:"350px"}}
            >
              <Box as="img" src={item.img} alignContent={"center"} alt={item.title} w={"60px"} paddingBottom={item.img === preventiveCare || item.img === ambulance ? "15px" : "1px"}/>
              <Text fontWeight={"700"} pb="5px" textAlign={"justify"}>{item.title}</Text>
              <Text pb="5px" textAlign={"match-parent"}>{item.description}</Text>
            </Flex>
          ))
          }
        </Flex>
    </Box>
  )
}

export default Services
