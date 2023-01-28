import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
    <Flex p="10" gap="10">
      <Image src={avatar_url} alt="login" borderRadius="full" boxSize="200px" />
      <Box>
        <Text fontSize="35px">{login}</Text>
        <Text display="flex" flexDirection="column" gap="2">
          <Box>
            {location && (
              <Box display="flex" alignItems="center" gap="2">
                <MdLocationPin />
                {location}
              </Box>
            )}
          </Box>

          <Box display="flex" alignItems="center" gap="2">
            <p>Seguidores: </p>
            <p>{followers}</p>
          </Box>
          <Box display="flex" alignItems="center" gap="2">
            <p>Seguindo: </p>
            <p>{following}</p>
          </Box>

          <Link to="/repos/${login}">Ver melhores projetos</Link>
        </Text>
      </Box>
    </Flex>
  );
};
