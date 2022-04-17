import {
  Box,
  Text,
  Heading,
  Container,
  ListItem,
  OrderedList,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";

import siteMetadata from "../data/siteMetadata";

export default function Home() {
  return (
    <Container mt={"2rem"} maxW={"container.lg"}>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={siteMetadata.description} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:type" content={"website"} />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitter} />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={siteMetadata.socialBanner} />
      </Head>
      <Box>
        <Box mb={"2rem"}>
          <Heading mb={"1rem"} size={"lg"}>
            Hi, I'm Osinachi
          </Heading>

          <Text mb={".5rem"}>
            I'm a software engineer and technical writer.
          </Text>
          <Text mb={".5rem"}>
            I love working on things related to Data Engineering and distributed
            systems.
          </Text>
        </Box>

        <Box mb={"2rem"}>
          <Heading mb={"0.5rem"} size={"md"}>
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
            . This means that I dedicate significant hours of my time helping
            students learn Microsoft technologies.
          </Text>
        </Box>

        <Box mb={"2rem"}>
          <Heading mb={"0.5rem"} size={"md"}>
            Core Skills
          </Heading>

          <OrderedList>
            <ListItem>
              <Heading size={"sm"}>Problem Solving</Heading>
              <Text>
                I apply the principles of iteration to solve problems with
                software technologies.
              </Text>
            </ListItem>
            <ListItem>
              <Heading size={"sm"}>Technical Writing</Heading>
              <Text>
                I improve developer success by writing concise technical content
                on software and data engineering topics.
              </Text>
            </ListItem>
            <ListItem>
              <Heading size={"sm"}>Community Building</Heading>
              <Text>
                I work with student leaders, Cloud Advocates, and Microsoft Most
                Valued Professionals (MVPs) to share the gospel of technology to
                all software professionals.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>

        <Box mb={"2rem"}>
          <Heading mb={"0.5rem"} size={"md"}>
            Work Experience
          </Heading>

          <OrderedList>
            <ListItem>
              <Heading size={"sm"}>
                Patricia Technologies - Frontend Software Engineer{" "}
                <em>(July 2021 - Present)</em>
              </Heading>
              <Text>
                Improved payment processing for the operations team by 100% by
                working on payment management dashboards.
              </Text>
            </ListItem>
            <ListItem>
              <Heading size={"sm"}>
                Draft.dev - Technical Writer <em>(May 2021 - Present)</em>{" "}
              </Heading>
              <Text>
                Improved developer success by delivering concise technical
                articles on software and data engineering topics.
              </Text>
            </ListItem>
            <ListItem>
              <Heading size={"sm"}>
                E-settlement Ltd - Software Engineer Intern{" "}
                <em>(May 2020 - July 2020)</em>{" "}
              </Heading>
              <Text>
                Improved the overall user experience of the Paycenter admin app
                by fixing bugs using chrome dev tools.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>

        <Box mb={"2rem"}>
          <Heading mb={"0.5rem"} size={"md"}>
            Projects
          </Heading>

          <OrderedList>
            <ListItem>
              <Heading size={"sm"}>
                <Link
                  href="https://swag-gp.netlify.app/
"
                  textDecoration={"underline"}
                >
                  Swag GP
                </Link>
              </Heading>
              <Text>
                Built a CGPA calculator for college students that features a
                grade change system and offline use.
              </Text>
            </ListItem>
            <ListItem>
              <Heading size={"sm"}>
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
      </Box>
    </Container>
  );
}
