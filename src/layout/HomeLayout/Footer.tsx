import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import NewsletterSubscribe from "./NewsletterSubscribe";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <Grid
      backgroundColor={"#E1E4EA"}
      padding={"5rem 2rem"}
      templateColumns="1.5fr 5fr"
    >
      <Flex justifyContent={"center"}>
        <Box>
          <Image
            width={"120px"}
            src="/icons/generative-cad-services-with-text.png"
            alt="logo"
          />
        </Box>
      </Flex>

      <Box marginBottom={"50px"}>
        <NewsletterSubscribe />
        <Grid margin={"2rem 0"} templateColumns="repeat(4, 1fr)">
          <Flex flexDirection={"column"} rowGap={".5rem"}>
            <Heading mb={".5rem"} size={"md"}>
              Services
            </Heading>
            <Text>Product Development</Text>
            <Text>Consultation</Text>
            <Text>Corporate Trainings</Text>
            <Text>Book Consultation</Text>
          </Flex>
          <Flex flexDirection={"column"} rowGap={".5rem"}>
            <Heading mb={".5rem"} size={"md"}>
              Company
            </Heading>
            <Text>About Us</Text>
            <Text>Careers</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms and Conditions</Text>
          </Flex>
          <Flex flexDirection={"column"} rowGap={".5rem"}>
            <Heading mb={".5rem"} size={"md"}>
              Resources
            </Heading>
            <Text>Courses</Text>
            <Text>Products</Text>
            <Text>Blog</Text>
          </Flex>
          <Flex flexDirection={"column"} rowGap={".5rem"}>
            <Heading mb={".5rem"} size={"md"}>
              Support
            </Heading>
            <Text>Contact</Text>
          </Flex>
        </Grid>
      </Box>

      <Box gridColumnStart="2" textAlign={"center"}>
        <Flex mb={"1rem"} columnGap={"2rem"} justifyContent={"center"}>
          <Image src="/icons/linkedin-icon.svg" alt="LinkedIn" />
          <Image src="/icons/instagram-icon.svg" alt="Instagram" />
          <Image src="/icons/facebook-icon.svg" alt="Facebook" />
          <Image src="/icons/twitter-icon.svg" alt="Twitter" />
        </Flex>

        <Text>All rights reserved.</Text>
        <Text>Generative CAD Services. 202</Text>
      </Box>
    </Grid>
  );
}

export default Footer;
