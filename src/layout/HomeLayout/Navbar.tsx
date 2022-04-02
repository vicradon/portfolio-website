import React from "react";
import { Flex, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  return (
    <Flex p="1rem 2rem" justify="space-between" alignItems="center">
      <Image
        src="/icons/gcs-logo-with-side-text.png"
        alt="Generative CAD Services logo"
        width={"100px"}
      />

      <Flex alignItems={"center"} columnGap="1rem">
        <Link href="/courses">
          <a>Courses</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>
            <Button variant="outline" textDecoration="uppercase">
              Contact
            </Button>
          </a>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
