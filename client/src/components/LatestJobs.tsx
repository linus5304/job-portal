import { Flex, VStack, Text, Button, Box } from "@chakra-ui/react";
import React from "react";
import { JobListItem } from "./JobListItem";
import { useGetJobsQuery } from "./../generated/graphql";
import NextLink from 'next/link'

interface LatestJobsProps {}

export const LatestJobs: React.FC<LatestJobsProps> = ({}) => {
  const { data } = useGetJobsQuery({
    variables: { limit: 5 },
  });
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
        {data?.getJobs.jobs.map((job) => (
          <JobListItem
            title={job.title}
            location={job.location}
            imgUrl={job.imgUrl}
            postDate={job.createdAt}
            key={job.id}
            id={job.id}
            companyName={job.company.name}
          />
        ))}
      </VStack>
      <NextLink href="/jobs">
      <Button px="5%" mt="3%">
        View All
      </Button>
      </NextLink>
    </Flex>
  );
};
