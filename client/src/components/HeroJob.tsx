import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { SearchBox } from "./layouts/SearchBox";

interface HeroJobProps {}

export const HeroJob: React.FC<HeroJobProps> = ({}) => {
  return (
    <Flex w="100%" flexDirection="column" bg="#470137" m={0} h="200px">
      <Flex flexDirection="column" alignItems="center" m="auto">
        
      </Flex>
      <SearchBox />
    </Flex>
  );
};
