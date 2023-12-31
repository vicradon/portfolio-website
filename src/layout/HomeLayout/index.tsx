import {
  Container,
  Link,
  Flex,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import siteMetadata from "../../../data/siteMetadata";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

export default function HomeLayout(props: Props) {
  const { pathname } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const { children } = props;

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

      <Flex mb={"2rem"} justifyContent={"space-between"} as={"nav"}>
        <Link
          href={"/"}
          as={NextLink}
          textDecor={pathname === "/" ? "underline" : ""}
        >
          Home
        </Link>

        <Flex alignItems={"center"} mb={"2rem"} columnGap={"1rem"}>
          <Link
            href={"/technical-writing-portfolio"}
            as={NextLink}
            textDecor={
              pathname === "/technical-writing-portfolio" ? "underline" : ""
            }
          >
            {" "}
            Technical Writing Portfolio
          </Link>

          <IconButton
            icon={
              colorMode === "light" ? (
                <Image
                  src="/icons/bs-moon.svg"
                  alt="moon"
                  width={16}
                  height={16}
                />
              ) : (
                <Image
                  src="/icons/bs-sun.svg"
                  alt="sun"
                  width={16}
                  height={16}
                />
              )
            }
            aria-label="night mode switch"
            onClick={toggleColorMode}
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </IconButton>
        </Flex>
      </Flex>

      {children}
    </Container>
  );
}
