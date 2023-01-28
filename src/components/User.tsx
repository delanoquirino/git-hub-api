import { Box, Image, Text } from "@chakra-ui/react";
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
    <Box boxSize="sm">
      <Image src={avatar_url} alt="login" borderRadius="full" />
      <Text>{login}</Text>
      <Text>
        <Text fontSize="lg">
          {location && (
            <Box>
              <MdLocationPin />
              {location}
            </Box>
          )}
        </Text>
        <div>
          <div>
            <p>Seguidores</p>
            <p>{followers}</p>
          </div>
          <div>
            <p>Seguindo</p>
            <p>{following}</p>
          </div>
        </div>
        <Link to="/repos/${login}">Ver melhores projetos</Link>
      </Text>
    </Box>
  );
};
