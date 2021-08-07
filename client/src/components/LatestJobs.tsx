import { Flex, VStack, Text, Button, Box } from "@chakra-ui/react";
import React from "react";
import { JobListItem,  } from "./JobListItem";

interface LatestJobsProps {}

export const LatestJobs: React.FC<LatestJobsProps> = ({}) => {
  return (

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
          Latest Jobs
        </Text>
      </Box>
      <VStack spacing="24px" minW="100%">
        <JobListItem />
        <JobListItem />
        <JobListItem />
      </VStack>
      <Button px="5%" mt="3%">View All</Button>
    </Flex>
    
  );
};
