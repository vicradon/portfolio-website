import HomeLayout from "../src/layout/HomeLayout";
import {
  Box,
  Text,
  Button,
  Heading,
  Flex,
  Image,
  Container,
  Grid,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import TestimonialCard from "../src/components/Cards/TestimonialCard";
import BlogPostCard from "../src/components/Cards/BlogPostCard";
import StatsCard from "../src/components/Cards/StatsCard";
import ProjectCard from "../src/components/Cards/ProjectCard";

export default function Home() {
  return (
    <Box>
      <Box>
        <Text>Software Engineer and Technical Writer</Text>
        <Text>Osinachi</Text>

        <Text>I'm a software engineer and technical writer.</Text>
        <Text>
          I love working on things related to WebAssembly, Data Engineering, and
          distributed systems.
        </Text>

        <Box>
          <Text>More about me</Text>
          <Text>I love communities especially open source communities.</Text>
          <Text>I am a Microsoft Learn Student Ambassador.</Text>
        </Box>

        <Box>
          <Text>Core Skills</Text>

          <UnorderedList>
            <ListItem>
              <Heading size={"md"}>Problem Solving</Heading>
              <Text>I love solving real-world problems with software. </Text>
            </ListItem>
            <ListItem>
              <Heading size={"md"}>Technical Writing</Heading>
              <Text>
                I write technical articles and tutorials for software companies.
              </Text>
            </ListItem>
            <ListItem>
              <Heading size={"md"}>Community Building</Heading>
              <Text>I work with Student Leaders and </Text>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Text>My Projects</Text>
          <Text>
            I've worked on many projects over the years. Here's a sneak peak at
            some of them.
          </Text>

          <ProjectCard />
        </Box>
      </Box>
    </Box>
  );
}
