import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

export const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <Flex p="10" gap="5" flexDirection="column" alignItems="center">
      <Image
        src={avatar_url}
        alt="login"
        borderRadius="full"
        boxSize="200px"
        border="5px solid #FA71C4"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        gap="2"
      >
        <Text fontSize="35px">{login}</Text>
        <Text display="flex" flexDirection="column" gap="2" alignItems="center">
          <Box>
            {location && (
              <Box display="flex" alignItems="center" gap="2">
                <MdLocationPin fill="#FA71C4" fontSize="20px" />
                <Text color="#9da5d1">{location}</Text>
              </Box>
            )}
          </Box>

          <Box display="flex" gap="5">
            <Box textAlign="center">
              <Text>Seguidores: </Text>
              <Text borderRadius="2" bg="#FA71C4">
                {followers}
              </Text>
            </Box>
            <Center height="60px">
              <Divider orientation="vertical" />
            </Center>
            <Box textAlign="center">
              <Text>Seguindo: </Text>
              <Text borderRadius="2" bg="#FA71C4">
                {following}
              </Text>
            </Box>
          </Box>

          <Button bg="#3182CE" textAlign="center" p="5" borderRadius="2xl">
            <Link to="/repos/${login}">Ver melhores projetos</Link>
          </Button>
        </Text>
      </Box>
    </Flex>
  );
};
