import {ChakraProvider, Box} from "@chakra-ui/react";
import React from "react";
import theme from "../theme";
import {AppProps} from "next/app";
import {Navbar} from "../components/Navbar";
import {lightThemeGrad} from "../utils/constants";
import {Footer} from "../components/Footer";

// eslint-disable-next-line require-jsdoc
function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box bg={lightThemeGrad}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
