import { useState } from "react";

import { Box, Text } from "@chakra-ui/react";
import { UserProps } from "../types/user";

// components
import { Search } from "../components/Search";
import { User } from "../components/User";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

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
    <Box
      width="800px"
      height="500px"
      margin="auto"
      padding="20px"
      borderWidth="1px"
      rounded="lg"
      boxShadow="md"
      bgGradient="linear(to-r, rgba(11,175,255,1), #0aefff,rgba(32,254,255,1))"
    >
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
    </Box>
  );
};
