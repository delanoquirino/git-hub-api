import { useState } from "react";

import { Box } from "@chakra-ui/react";

// components
import { Search } from "../components/Search";

export const Home = () => {
  const [user, setUser] = useState(null);

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
      <Search />
    </Box>
  );
};
