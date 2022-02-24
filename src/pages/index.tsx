import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w="100%"
      maxWidth={1480}
      mt="4"
      h="20"
      mx="auto"
      px="6"
      align="center"
    >
      <Text as="h1" fontSize="20" fontFamily="Lawyer Gothic">
        Discover your Next.JS step
        <Text fontSize="16">Bring the tecnologie to you</Text>
      </Text>
    </Flex>
  );
}
