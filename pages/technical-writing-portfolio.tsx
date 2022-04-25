import React, { useState, useEffect } from "react";
import HomeLayout from "../src/layout/HomeLayout";
import axios from "axios";
import {
  Box,
  Heading,
  Link,
  List,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";

interface Props {}

function TechnicalWritingPortfolio(props: Props) {
  const {} = props;

  const [pageContent, setPageContent] = useState([]);
  const [error, setError] = useState("Loading...");

  useEffect(() => {
    axios
      .get("/api/get-page-content")
      .then(({ data }) => {
        setPageContent(data.response.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const grouper = (content: any) => {
    const groups: {
      id: string;
      heading: string;
      listItems: { id: string; content: string; link: string }[];
    }[] = [];

    for (let item of content) {
      if (item.type === "heading_1") {
        groups.push({
          id: item.id,
          heading: item.heading_1.rich_text[0].plain_text,
          listItems: [],
        });
      } else if (
        item.type === "numbered_list_item" &&
        groups[groups.length - 1]
      ) {
        groups[groups.length - 1].listItems.push({
          id: item.id,
          content: item.numbered_list_item.rich_text[0].plain_text,
          link: item.numbered_list_item.rich_text[0].href,
        });
      }
    }

    return groups;
  };

  return (
    <HomeLayout>
      <Heading mb={"1rem"} as={"h1"} size={"lg"}>
        Technical Writing Portfolio
      </Heading>

      <Text mb={"1rem"}>
        I have written technical content for organizations like Section.io,
        Repl.it, and Educative.io. Some of these blogs were through Draft.dev, a
        technical writing organization.
      </Text>

      {grouper(pageContent).map((group) => {
        return (
          <Box mb={"1.5rem"} key={group.id}>
            <Heading mb={"0.5rem"} as={"h2"} size={"md"}>
              {group.heading}
            </Heading>

            <OrderedList>
              {group.listItems.map((item) => (
                <ListItem key={item.id}>
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    href={item.link}
                    target={"_blank"}
                  >
                    {item.content}
                  </Link>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        );
      })}

      {!pageContent.length && <Text>{error}</Text>}
    </HomeLayout>
  );
}

export default TechnicalWritingPortfolio;
