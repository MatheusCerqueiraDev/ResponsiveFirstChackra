import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { MdOutlineTranslate } from "react-icons/md";
import { RiNotificationLine } from "react-icons/ri";
import Logo from "../Logo";
import Search from "../Search";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Flex flex={["12", "1"]}>
        <Logo />
      </Flex>

      <Search />

      <Flex align="center" ml="auto">
        <HStack
          display={["none", "flex"]}
          spacing="8"
          mx="8"
          pr="8"
          py="4"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={MdOutlineTranslate} fontSize="20" />
        </HStack>

        <Flex align="center" display={["none", "flex"]}>
          <Box mr="4" textAlign="right">
            <Text>Matheus de Carvalho</Text>
            <Text color="gray.300" fontSize="small">
              matheuscerqueira12@icloud.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Matheus de Carvalho"
            src="https://github.com/MatheusCerqueiraDev.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
