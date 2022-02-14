import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text
      align="center"
      as="h1"
      display="block"
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="62"
    >
      MAC Query
      <Text as="h6" textAlign="center" fontSize={["smaller", "md"]}>
        Software Solutions
      </Text>
    </Text>
  );
}
