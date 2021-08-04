import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { SearchBox } from "./layouts/SearchBox";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Flex w="100%" flexDirection="column" bg="#470137" m={0} h="400px">
      <Flex flexDirection="column" alignItems="center" m="auto">
        <Text fontSize={['2xl', '2xl','4xl','6xl' ]} fontWeight="bold" color="white" textAlign="center">SEARCH 9 LIVE JOBS</Text>
        <Text fontSize={['xl', 'xl','2xl','2xl' ]}  color="white" textAlign="center">Finding your new job just got easier</Text>
      </Flex>
      <SearchBox/>
    </Flex>
  );
};
