import React from "react";
import {
  Flex,
  Text,
  VStack,
  Image,
  HStack,
  Wrap,
  WrapItem,
  Stack
} from "@chakra-ui/react";
import { HeroSearchBox } from "./HeroSearchBox";
import { ImageComponent } from "./Image";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      <VStack>
        <Stack
          minH="80vh"
          justifyContent="space-between"
          m="auto"
          w="80%"
          py="3%"
          direction={["column", "column", "column", "row", "row"]}
        >
          <VStack flexDirection="column" align="flex-start" spacing="10%" w="80%">
            <VStack spacing="-8px" align="flex-start">
              <Text
                fontSize={["2xl", "2xl", "4xl", "4em"]}
                fontWeight="semibold"
                lineHeight="1.1em"
                w={["100%", "100%", "100%", "100%", "80%"]}
              >
                Find Your Next Job And Make Your own Goal.
              </Text>
              
            </VStack>
            <Text fontSize={["xl", "xl", "2xl", "2xl"]} w={["100%", "100%", "100%", "100%", "80%"]}>
              We are the best global job portal agency and millions of people
              like and trust our platform
            </Text>
            <HeroSearchBox />
          </VStack>

          <Wrap spacing="20px">
            <WrapItem>
              <ImageComponent />
            </WrapItem>
            <WrapItem>
              <ImageComponent />
            </WrapItem>
            <WrapItem>
              <ImageComponent />
            </WrapItem>
            <WrapItem>
              <ImageComponent />
            </WrapItem>
          </Wrap>
        </Stack>
      </VStack>
    </>
  );
};
