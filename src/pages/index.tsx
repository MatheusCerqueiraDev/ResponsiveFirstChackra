import { Button, Flex, Stack, StackDivider, VStack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <Flex h="100vh" w="100vw" align="center" justify="center" display="flex">
      <VStack divider={<StackDivider borderColor="gray.200" />}>
        <Flex mb="4" as="section" h="inherit" alignItems="center" w="100%">
          <Logo />
        </Flex>
        <Flex justify="center" display={["block", "flex"]} mx={["0", "10"]}>
          <Flex
            as="form"
            bg="gray.800"
            borderRadius={8}
            flexDir="column"
            maxWidth={360}
            p="8"
            width="100%"
          >
            <Stack spacing="4">
              <Input name="email" type="email" label="Email" />
              <Input name="password" type="password" label="Senha" />
            </Stack>
            <Button
              type="submit"
              mt="6"
              colorScheme="pink"
              _hover={{
                bgColor: "gray.900",
              }}
            >
              Acessar
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
}
