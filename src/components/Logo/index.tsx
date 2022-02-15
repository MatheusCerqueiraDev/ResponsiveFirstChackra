import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text
      as="h1"
      display="block"
      fontSize={["3xl", "3xl"]}
      fontWeight={["700", "900"]}
      fontFamily="Lawyer Gothic"
      w="100%"
    >
      MAC Query
      <Text as="h6" fontSize="small">
        Software Solutions
      </Text>
    </Text>
  );
}
