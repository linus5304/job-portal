import React from "react";
import { Flex, Text, VStack, Box } from "@chakra-ui/react";
import { JobListItem } from "./JobListItem";

interface FeaturedJobsProps {}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({}) => {
  return (
      <>
    <Flex
      flexDirection="column"
      maxWidth="60%"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      py={10}
    >
      <Box>
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb="3%">
          {" "}
          Featured Jobs
        </Text>
      </Box>
      <VStack spacing="24px" w="100%">
        <JobListItem />
        <JobListItem />
        <JobListItem />
      </VStack>
    </Flex>
    </>
  );
};
