import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  listItems: string[];
  reverseImagePosition: boolean;
  children: React.ReactNode;
}

function ServiceOfferingList(props: Props) {
  const { title, children, listItems, reverseImagePosition } = props;

  return (
    <Flex
      columnGap={"3rem"}
      flexDirection={reverseImagePosition ? "row-reverse" : "row"}
    >
      <Box>
        <Heading mb={"2rem"} textTransform={"uppercase"} size={"lg"}>
          {title}
        </Heading>

        {children}

        <List spacing={3}>
          {listItems.map((name) => (
            <ListItem key={name}>
              <Image
                src="/icons/bs-check.svg"
                alt="check"
                width={16}
                height={16}
              />
              {name}
            </ListItem>
          ))}
        </List>
      </Box>

      <Image
        width={"600px"}
        src={"/images/male-architect.png"}
        alt={"male architect"}
        rounded={"3xl"}
      />
    </Flex>
  );
}

export default ServiceOfferingList;
