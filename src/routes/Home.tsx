import { useState } from "react";

import { Box } from "@chakra-ui/react";
import { UserProps } from "../types/user";

// components
import { Search } from "../components/Search";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    console.log(data);
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
    >
      <Search loadUser={loadUser} />
    </Box>
  );
};
