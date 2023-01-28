import { useState } from "react";

import { Box, Text } from "@chakra-ui/react";
import { UserProps } from "../types/user";

// components
import { Search } from "../components/Search";
import { User } from "../components/User";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    setIsLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    setIsLoading(false);

    if (res.status === 404) {
      setError(true);
      return;
    }

    // destruction
    const { avatar_url, login, location, followers, following } = data;

    // constituir novo objeto com as variaveis acima
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <Box maxWidth="800px" margin="auto">
      <Box
        width="70%"
        margin="auto"
        mt="20px"
        padding="2"
        borderWidth="1px"
        rounded="lg"
        boxShadow="md"
      >
        <Search loadUser={loadUser} />
        <Box textAlign="center">
          {isLoading && <Loader />}
          {error && <Error />}
        </Box>
      </Box>
      <Box bg="#504a4a" margin="auto" width="70%" mt="19" borderRadius="5px">
        {user && <User {...user} />}
      </Box>
    </Box>
  );
};
