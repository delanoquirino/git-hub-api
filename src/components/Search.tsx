type SearchProps = {
  // recebendo uma promessa, como em uma api
  loadUser: (userName: string) => Promise<void>;
};

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

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="2">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Busque por um usuário:
            </Heading>
          </Box>
          <Flex gap={2}>
            <Input
              placeholder="Digite o nome do usuário"
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button colorScheme="blue" onClick={() => loadUser(userName)}>
              <BsSearch />
            </Button>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
