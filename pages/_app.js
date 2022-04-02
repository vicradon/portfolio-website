import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: "#1a365d",
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
