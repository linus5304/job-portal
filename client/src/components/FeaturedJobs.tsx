import React from "react";
import { Flex, Text, VStack, Box } from "@chakra-ui/react";
import { JobListItem } from "./JobListItem";
import { useGetJobsQuery } from "../generated/graphql";

interface FeaturedJobsProps {}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({}) => {
  const {data} = useGetJobsQuery({
    variables: {limit : 3}
  })
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
      {data?.getJobs.jobs.map((job) => (
            <JobListItem
              title={job.title}
              location={job.location}
              imgUrl={job.imgUrl}
              postDate={job.createdAt}
              key={job.id}
              companyName={job.company.name}
              id={job.id}
            />
          ))}
      </VStack>
    </Flex>
    </>
  );
};
