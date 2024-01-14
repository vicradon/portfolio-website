import {
  Box,
  Text,
  Heading,
  ListItem,
  OrderedList,
  Link,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import HomeLayout from "../src/layout/HomeLayout";
import UnixSVG from "@/components/UnixSVG";

export default function Home() {
  const { colorMode } = useColorMode();
  
  return (
    <HomeLayout>
      <Box mb={"2rem"}>
        <Text>Hello internet user,</Text>
        <Heading as={"h1"} mb={"1rem"} size={"lg"}>
          My name is Osinachi 👋🏾
        </Heading>

        <Text mb={".5rem"}>
          I'm a software engineer with 2+ years of experience in building software systems, particularly in the Fintech space. I also write technical content as a side gig. I particularly enjoy creating tutorials that pertain to:
        </Text>

        <OrderedList mb={4} marginLeft={"2rem"}>
          <ListItem>CLI tools 🛠️ </ListItem>
          <ListItem>
            <Flex alignItems={"center"} columnGap={"5px"}>
              <Text>Linux</Text>
              <UnixSVG />
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems={"center"} columnGap={"5px"}>
              <Text>Databases (PostgreSQL, MySQL, SQLite, etc)</Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18V13.974C4.50221 14.5906 5.21495 15.1029 6.00774 15.4992C7.58004 16.2854 9.69967 16.75 12 16.75C14.3003 16.75 16.42 16.2854 17.9923 15.4992C18.7851 15.1029 19.4978 14.5906 20 13.974V18Z"
                  fill={colorMode === "dark" ? "#fff" : "#1C274C"}
                />
                <path
                  d="M12 10.75C14.3003 10.75 16.42 10.2854 17.9923 9.49925C18.7851 9.10285 19.4978 8.59059 20 7.97397V12C20 12.5 18.2143 13.5911 17.3214 14.1576C15.9983 14.8192 14.118 15.25 12 15.25C9.88205 15.25 8.00168 14.8192 6.67856 14.1576C5.5 13.5683 4 12.5 4 12V7.97397C4.50221 8.59059 5.21495 9.10285 6.00774 9.49925C7.58004 10.2854 9.69967 10.75 12 10.75Z"
                  fill={colorMode === "dark" ? "#fff" : "#1C274C"}
                />
                <path
                  d="M17.3214 8.15761C15.9983 8.81917 14.118 9.25 12 9.25C9.88205 9.25 8.00168 8.81917 6.67856 8.15761C6.16384 7.95596 5.00637 7.31492 4.2015 6.27935C4.06454 6.10313 4.00576 5.87853 4.03988 5.65798C4.06283 5.50969 4.0948 5.35695 4.13578 5.26226C4.82815 3.40554 8.0858 2 12 2C15.9142 2 19.1718 3.40554 19.8642 5.26226C19.9052 5.35695 19.9372 5.50969 19.9601 5.65798C19.9942 5.87853 19.9355 6.10313 19.7985 6.27935C18.9936 7.31492 17.8362 7.95596 17.3214 8.15761Z"
                  fill={colorMode === "dark" ? "#fff" : "#1C274C"}
                />
              </svg>{" "}
            </Flex>
          </ListItem>
        </OrderedList>
        <Box mb={8}>
          <Text mb={".5rem"}>
            Now, here's the deal: I love tech. I love building stuff, configuring systems, networks, applications, and more. However, I wouldn't have gone through all this without developing expertise to make myself employable.
          </Text>
          <Text mb={".5rem"}>
            Currently, my expertise lies in web development, specifically frontend web development, with over 2 years of experience in this field.
          </Text>
          <Text mb={".5rem"}>
            In addition to my frontend software engineering experience, I've worked on building backend systems with FastAPI, AdonisJS, and Laravel.
          </Text>
        </Box>

        <Heading as="h2" size={"lg"}>
          Certifications and Stuff
        </Heading>

        <Text mb={4}>
          I also have experience in administering cloud systems and networks. I
          currently have four Azure certifications and one associate
          certification in AI. Oh, you want to see the list? No worries:
        </Text>

        <Box mb={4}>
          <Heading as="h3" size="md">
            Fundamentals Certifications
          </Heading>

          <OrderedList mb={4} marginLeft={"2rem"}>
            <ListItem>Azure Fundamentals (AZ-900)</ListItem>
            <ListItem>Azure AI Fundamentals (AI-900)</ListItem>
            <ListItem>Azure Data Fundamentals (DP-900)</ListItem>
            <ListItem>Azure Security Fundamentals (SC-900)</ListItem>
          </OrderedList>
        </Box>

        <Box mb={4}>
          <Heading as="h3" size="md">
            Associate Certifications
          </Heading>

          <OrderedList mb={4} marginLeft={"2rem"}>
            <ListItem>Azure AI Associate (AI-200)</ListItem>
          </OrderedList>
        </Box>
      </Box>

      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Core Skills
        </Heading>

        <OrderedList mb={4} marginLeft={"2rem"}>
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
        <Box mb={4}>
          <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
            Work Experience
          </Heading>

          <OrderedList mb={4} marginLeft={"2rem"}>
            <ListItem>
              <Heading as={"h3"} size={"sm"}>
                Patricia Technologies - Frontend Software Engineer{" "}
                <em>(July 2021 - May 2023 [2 years])</em>
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
                Microsoft Learn Student Ambassador{" "}
                <em>(January 2020 - August 2023)</em>{" "}
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

        <Box mb={4}>
          <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
            Volunteering Experience
          </Heading>
          <OrderedList mb={4} marginLeft={"2rem"}>
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
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Projects
        </Heading>

        <OrderedList mb={4} marginLeft={"2rem"}>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              <Link
                href="https://tbh.ink
"
                textDecoration={"underline"}
              >
                AnonMsg App
              </Link>
            </Heading>
            <Text>
              I built an anonymous messaging application that users can use to
              receive and share anonymous messages from friends and enemies
              alike.
            </Text>
          </ListItem>
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
          href="/Osinachi-Chukwujama-Resume.pdf"
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
