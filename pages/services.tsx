import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import ServicePageCard from "../src/components/Cards/ServicePageCard";
import HomeLayout from "../src/layout/HomeLayout";
import ServiceOfferingList from "../src/components/Lists/ServiceOfferingList";
import ConsultationCard from "../src/components/Cards/ConsultationCard";

interface Props {}

function Services(props: Props) {
  const {} = props;

  const services = [
    {
      title: "PRODUCT DEVELOPMENT",
      description: [
        "We handle the entire product lifestyle, from ideation to prototyping to production. We do this with great precision, excellent quality and customer satisfaction.",
        "We offer product development services in the following areas:",
      ],
      listItems: [
        "Mechanical Equipments / Machines.",
        "Commercial Electronics.",
        "IoT Products / Devices.",
        "Consumer Electronics.",
      ],
      reverseImagePosition: false,
    },
    {
      title: "CONSULTATION",
      description: [
        "We handle the entire product lifestyle, from ideation to prototyping to production. We do this with great precision, excellent quality and customer satisfaction.",
        "We offer product development services in the following areas:",
      ],
      listItems: [
        "Mold Design.",
        "CAM Tooling Services.",
        "CAD Conversion Services.",
        "Finite Element Analysis (FEA).",
      ],
      reverseImagePosition: true,
    },
    {
      title: "CORPORATE TRAININGS",
      description: [
        "At Generative CAD Services Limited, we offer on-site training tailored to your needs. Our Corporate Training Program has the following features:",
      ],
      listItems: [
        "Beginner classes, these enable new users learn the key capabilities of Autodesk software.",
        "Transition classes, which allow experienced users to apply their skills to new software versions and/or cross over to different Autodesk products.",
        "Master classes which focus on advanced skills.",
      ],
      reverseImagePosition: false,
    },
  ];

  return (
    <HomeLayout>
      <Box
        mb={"2rem"}
        paddingBottom={"4rem"}
        background={"url(/images/service-page-bg.png)"}
        backgroundSize={"cover"}
        display={"flex"}
        justifyContent={"end"}
        alignItems={"flex-start"}
        flexDirection={"column-reverse"}
        height={"90vh"}
      >
        <Container maxW={"container.xl"}>
          <ServicePageCard />
        </Container>
      </Box>

      <Container maxW={"container.xl"}>
        {services.map((service) => (
          <Box key={service.title} mb={"4rem"}>
            <ServiceOfferingList
              reverseImagePosition={service.reverseImagePosition}
              title={service.title}
              listItems={service.listItems}
            >
              {service.description.map((description, index) => (
                <Text key={index} mb={"1rem"}>
                  {description}
                </Text>
              ))}
            </ServiceOfferingList>
          </Box>
        ))}
      </Container>

      <ConsultationCard />
    </HomeLayout>
  );
}

export default Services;
