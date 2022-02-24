import { ChakraProvider, Flex } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import FontFace from "../components/FontFace";
import Header from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [sidebarhandler, setSidebarHandler] = useState(false);

  function HandleSidebar() {
    setSidebarHandler(!sidebarhandler);
  }

  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Flex
          justify={["flex-start", "center"]}
          mx="auto"
          w="100%"
          h={9}
          maxWidth={1480}
        >
          {sidebarhandler ? (
            <Sidebar
              handleSidebar={HandleSidebar}
              sidebarhandler={sidebarhandler}
            />
          ) : (
            <>
              <Flex>
                <Flex
                  as="span"
                  display={["flex", "none"]}
                  onClick={HandleSidebar}
                >
                  {sidebarhandler ? "" : <AiOutlineMenuUnfold size={25} />}
                </Flex>
                <Navbar />
              </Flex>
            </>
          )}
        </Flex>
        <Component {...pageProps} />
      </ChakraProvider>
      <FontFace />
    </>
  );
}

export default MyApp;
