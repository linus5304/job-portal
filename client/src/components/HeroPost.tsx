import React from "react";
import { Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import { HPost } from "./svg/HPost";

interface HeroPostProps {}

export const HeroPost: React.FC<HeroPostProps> = ({}) => {
  return (
    <Flex bg="#00b074" py="8%">
      <Stack
        direction={["column", "column", "column", "row", "row"]}
        w="80%"
        mx="auto"
      >
        <Stack
          direction="column"
          align="flex-start"
          my="auto"
          w={["100%", "100%", "100%", "100%", "60%"]}
        >
          <Text
            fontSize={["2xl", "2xl", "4xl", "6xl"]}
            fontWeight="bold"
            color="white"
          >
            Get applications from the world best talents.
          </Text>
          <Text fontSize={["xl", "xl", "2xl", "2xl"]} color="white">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps.
          </Text>
          <Button size="lg">Post Job</Button>
        </Stack>
        <Flex>
          <HPost />
        </Flex>
      </Stack>
    </Flex>
  );
};
