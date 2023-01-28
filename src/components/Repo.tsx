import { Box, Button, Text } from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RepoProps } from "../types/repo";
import { Link } from "react-router-dom";

export const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  return (
    <Box>
      <Box textStyle="h3">{name}</Box>
      <Text>
        <BsCodeSlash /> {language}
      </Text>
      <Box>
        <Box>
          <AiOutlineStar />
          <Text>{stargazers_count}</Text>
        </Box>
        <Box>
          <AiOutlineFork />
          <Text>{forks_count}</Text>
        </Box>
      </Box>
      <Link to={html_url} target="_blank">
        <Button>Ver código</Button>
        <RiGitRepositoryLine />
      </Link>
    </Box>
  );
};
