import {
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";

export const Search = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Busque por um usuário:
              </Heading>
              <Text pt="2" fontSize="sm">
                Conheça seus melhores repositórios
              </Text>
            </Box>
            <Flex gap={2}>
              <Input placeholder="Basic usage" />
              <Button colorScheme="blue">
                <BsSearch />
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};
