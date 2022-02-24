import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Text
          as="h1"
          display="block"
          fontSize={["3xl", "3xl"]}
          fontWeight={["700", "900"]}
          fontFamily="Lawyer Gothic"
          w="100%"
        >
          MAC Query
          <Text fontSize="small">Software Solutions</Text>
        </Text>
      </a>
    </Link>
  );
}
