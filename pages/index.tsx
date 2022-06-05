import {
  Box,
  Text,
  Heading,
  ListItem,
  OrderedList,
  Link,
} from "@chakra-ui/react";
import HomeLayout from "../src/layout/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <Box mb={"2rem"}>
        <Heading as={"h1"} mb={"1rem"} size={"lg"}>
          Hi, I'm Osinachi 👋🏾
        </Heading>

        <Text mb={".5rem"}>
          I'm a software engineer, technical writer, and aspiring developer
          advocate 🥑.
        </Text>
        <Text mb={".5rem"}>
          I love working with technologies in the data engineering and
          cloud-native ecosystem.
        </Text>
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          More about me
        </Heading>

        <Text>
          I am a{" "}
          <Link
            href="https://studentambassadors.microsoft.com"
            display={"inline-block"}
            fontWeight={"bold"}
            textDecoration={"underline"}
          >
            Microsoft Learn Student Ambassador
          </Link>
          . I have several years of experience empowering students to learn new
          technologies and grow as techies.
        </Text>
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Core Skills
        </Heading>

        <OrderedList>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              Problem Solving
            </Heading>
            <Text>
              I apply the principles of iteration to solve problems with
              software technologies.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              Technical Writing
            </Heading>
            <Text>
              I improve developer success by writing concise technical content
              on software and data engineering topics.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              Community Building
            </Heading>
            <Text>
              I work with student leaders, Cloud Advocates, and Microsoft Most
              Valued Professionals (MVPs) to share the gospel of technology to
              all software professionals.
            </Text>
          </ListItem>
        </OrderedList>
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Work Experience
        </Heading>

        <OrderedList>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              Patricia Technologies - Frontend Software Engineer{" "}
              <em>(July 2021 - Present)</em>
            </Heading>
            <Text>
              Improved payment processing for the operations team by 100% by
              working on payment management dashboards.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              Draft.dev - Technical Writer <em>(May 2021 - Present)</em>{" "}
            </Heading>
            <Text>
              Improved developer success by delivering concise technical
              articles on software and data engineering topics.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              Learn Student Ambassador <em>(January 2020 - Present)</em>{" "}
            </Heading>
            <Text>
              • Organized meetups and workshops on Azure functions, Azure
              Applied AI services, and Azure App Services.
            </Text>
            <Text>
              • Impacted over 2000 students by co-organized Microsoft Student
              Summit Africa 2020.
            </Text>
            <Text>
              • Mentored other student ambassadors to help them reach new
              milestones and learn new technologies.
            </Text>
          </ListItem>
        </OrderedList>
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Projects
        </Heading>

        <OrderedList>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              <Link
                href="https://swag-gp.netlify.app/
"
                textDecoration={"underline"}
              >
                Swag GP
              </Link>
            </Heading>
            <Text>
              Built a CGPA calculator for college students that features a grade
              change system and offline use.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              <Link
                href="https://promise-card.netlify.app/
"
                textDecoration={"underline"}
              >
                Promise Card
              </Link>
            </Heading>
            <Text>
              Built a tool for creating wish lists and redeeming them.
            </Text>
          </ListItem>
        </OrderedList>
      </Box>
      <Box mb={"2rem"}>
        <Link
          href="/Osinachi_Chukwujama_Resume.pdf"
          display={"inline-block"}
          fontWeight={"bold"}
          rel={"norefer"}
          target={"_blank"}
          textDecoration={"underline"}
        >
          View my resume
        </Link>
      </Box>
    </HomeLayout>
  );
}
