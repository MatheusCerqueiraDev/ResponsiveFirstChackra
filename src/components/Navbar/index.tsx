import { Flex, HStack, Link, List, ListItem } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

export function Navbar() {
  return (
    <Flex as="nav" display={["none", "flex"]} mt={15} mb={50} align="center">
      <List fontFamily="Lawyer Gothic">
        <HStack spacing={30}>
          <ListItem>
            <ActiveLink activeClassName={" color: pink.500"} href="/home">
              <Link>Home</Link>
            </ActiveLink>
          </ListItem>
          <ListItem>
            <Link href="/aboutme">Matheus</Link>
          </ListItem>

          <ListItem>
            <Link href="/contact">Contact</Link>
          </ListItem>
          <ListItem>
            <Link href="/clients">Clients</Link>
          </ListItem>
          <ListItem>
            <Link href="/projects">Projects</Link>
          </ListItem>
        </HStack>
      </List>

      {/* <HStack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="grey.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" py="4">
              <HStack>
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text>Home</Text>
              </HStack>
            </Link>

            <Link display="flex" py="4">
              <HStack>
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text>Home</Text>
              </HStack>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="grey.400" fontSize="small">
            CONTATO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" py="4">
              <HStack>
                <Icon as={SiGmail} fontSize="20" />
                <Text>Home</Text>
              </HStack>
            </Link>
            <Link display="flex" py="4">
              <HStack>
                <Icon as={GrLinkedinOption} fontSize="20" />
                <Text>Home</Text>
              </HStack>
            </Link>
          </Stack>
        </Box>
      </HStack> */}
    </Flex>
  );
}
