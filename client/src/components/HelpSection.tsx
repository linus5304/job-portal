import {
  Flex,
  Stack,
  Image,
  Text,
  VStack,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { MdDashboard, MdSearch } from "react-icons/md";

interface HelpSectionProps {}

export const HelpSection: React.FC<HelpSectionProps> = ({}) => {
  return (
    <Flex bg="#fff" py="5%">
      <Stack
        w="80%"
        mx="auto"
        direction={["column", "column", "column", "row", "row"]}
        spacing="10%"
        
      >
        <Flex>
          <Image src="/content-2-img1.png" alt="smile" />
        </Flex>
        <VStack align="flex-start" spacing="20px">
          <Text fontSize="2em" fontWeight="bold" w="80%" >
            Help you to get the best job that fits you
          </Text>
          <HStack align="flex-start">
            <Box p="2%" bg="green.100" borderRadius="4%">
              <Icon as={MdDashboard} fontSize="2em" color="green.400" />
            </Box>
            <VStack w="60%" align="flex-start">
              <Text fontSize="2xl" fontWeight="semibold">
                #1 Jobs site in UK
              </Text>
              <Text fontSize="lg">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative
              </Text>
            </VStack>
          </HStack>
          <HStack align="flex-start">
            <Box p="2%" bg="yellow.100" borderRadius="4%">
              <Icon as={MdSearch} fontSize="2em" color="yellow.400" />
            </Box>
            <VStack w="60%" align="flex-start">
              <Text fontSize="2xl" fontWeight="semibold">
              Seamless searching
              </Text>
              <Text fontSize="lg">
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
              </Text>
            </VStack>
          </HStack>
          <HStack align="flex-start">
            <Box p="2%" bg="red.100" borderRadius="4%">
              <Icon as={MdDashboard} fontSize="2em" color="red.400" />
            </Box>
            <VStack w="60%" align="flex-start">
              <Text fontSize="2xl" fontWeight="semibold">
              Hired in top companies
              </Text>
              <Text fontSize="lg">
              Podcasting operational change management inside of workflows to establish.
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
};
