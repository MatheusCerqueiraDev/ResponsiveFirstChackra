import { Box, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { GrLinkedinOption } from "react-icons/gr";
import { RiDashboardLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
export function Sidebar() {
  return (
    <Box display={["none", "block"]} as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
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
      </Stack>
    </Box>
  );
}
