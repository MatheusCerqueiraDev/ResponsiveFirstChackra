import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
};

const series = [{ name: "Commits", data: [7, 12, 15, 8, 14] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          sx={{ align: "flex-start" }}
          gap="4"
          flex="1"
          minChildWidth="320px"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontWeight="700" mb="4" fontSize={["xl", "lg"]}>
              Actions no Github
            </Text>
            <Chart options={options} series={series} height={160} type="area" />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontWeight="700" mb="4" fontSize={["xl", "lg"]}>
              Actions no Github
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
