import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

function NewsletterSubscribe(props: Props) {
  const {} = props;

  return (
    <Flex
      backgroundColor={"#B7B7B9"}
      justifyContent={"space-between"}
      padding={"2rem"}
      rounded={"2xl"}
    >
      <Text>
        Subscribe to our Newsletter to receives updates
        <br /> and information about new services, opportunities
        <br /> and new features coming in.
      </Text>

      <Flex
        padding={".5rem 1rem"}
        rounded={"lg"}
        alignItems={"center"}
        backgroundColor={"white"}
      >
        <Input
          width={"300px"}
          type="email"
          placeholder="Please enter your email"
          border={"none"}
        />
        <Button backgroundColor={"brand"} width={"120px"} fontSize={"xl"}>
          Subscribe
        </Button>
      </Flex>
    </Flex>
  );
}

export default NewsletterSubscribe;
