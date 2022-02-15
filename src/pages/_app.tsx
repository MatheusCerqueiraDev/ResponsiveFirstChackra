import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import FontFace from "../components/FontFace";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <FontFace />
    </>
  );
}

export default MyApp;
