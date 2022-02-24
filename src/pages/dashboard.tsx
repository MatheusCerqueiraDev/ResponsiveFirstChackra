import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const chartConfig = {
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
  const [sidebarhandler, setSidebarHandler] = useState(false);

  function HandleSidebar() {
    setSidebarHandler(!sidebarhandler);
  }

  return (
    <Flex direction="column" h="100vh">
      <Flex
        display="block"
        justify="space-between"
        width="100%"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
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
            <Chart
              options={chartConfig}
              series={series}
              height={160}
              type="area"
            />
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
