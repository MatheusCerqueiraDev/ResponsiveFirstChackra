import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text
      align="center"
      as="h1"
      display="block"
      fontSize={["3xl", "xl"]}
      fontWeight={["700", "900"]}
      fontFamily="Lawyer Gothic"
      letterSpacing="tight"
      w="100%"
    >
      MAC Query
      <Text as="h6" textAlign="center" fontSize="x-small">
        Software Solutions
      </Text>
    </Text>
  );
}
