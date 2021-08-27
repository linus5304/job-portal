import React, { useState } from "react";
import { layout } from "../login";

import { HeroJob } from "./../../components/HeroJob";
import {
  Flex,
  VStack,
  Button,
  Text,
  Box,
  Heading,
  Skeleton,
  Icon,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Filter } from "./../../components/Filter";
import { JobListItem } from "./../../components/JobListItem";
import { SearchBox } from "./../../components/SearchBox";
import {
  Job,
  useGetJobsQuery,
  useSearchJobsQuery,
} from "./../../generated/graphql";
import { MainLayout } from "./../../components/layouts/MainLayout";
import { withApollo } from "../../utils/withApollo";
import { MdSearch, MdLocationOn } from "react-icons/md";

interface indexProps {}

export const index: React.FC<indexProps> & layout = ({}) => {
  const { data, loading, fetchMore, variables, error } = useGetJobsQuery({
    variables: { limit: 5, cursor: null },
  });

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  // const { data, loading, error, fetchMore, variables } = useSearchJobsQuery({
  //   variables: { title, location, limit: 10, cursor: null },
  // });

  if (!data && !loading) {
    return <Text>{error.message}</Text>;
  }

  if(error){
    return <Text>{error.message}</Text>;
  }

  return (
    <>
      <MainLayout>
        <Flex justify="space-between" mx="auto" w="60%" pt="10%" pb="4%">
          <VStack
            spacing="24px"
            align="flex-start"
            display={["none", "none", "none", "flex", "flex"]}
          >
            <Filter
              values={["Full Time", "Part time", "contract"]}
              heading="Job Types"
            />
            <Filter
              values={["All", "Yaounde", "Douala", "Bafoussam"]}
              heading="Region"
            />
            <Filter
              values={["All", "Senior", "Mid", "Junior"]}
              heading="Experience Level"
            />
          </VStack>
          <VStack align="flex-start" w="100%" spacing="30px">
            {/* <Flex p={8} bg="white" boxShadow="lg" borderRadius="lg" w="100%">
              <Stack
                direction={["column", "column", "column", "row", "row"]}
                alignItems="center"
                w="100%"
                justify="space-between"
              >
                <Flex alignItems="center">
                  <Icon as={MdSearch} color="#00b074" fontSize="2em" />
                  <Input
                    variant="flushed"
                    placeholder="Job Title"
                    name="title"
                    onChange={(e) => setTitle("%" + e.target.value + "%")}
                  />
                </Flex>
                <Flex alignItems="center">
                  <Icon as={MdLocationOn} color="#00b074" fontSize="2em" />
                  <Input
                    variant="flushed"
                    name="location"
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Flex>
                <Button
                  type="submit"
                  bg="#00b074"
                  color="white"
                  size="lg"
                  _hover={{ bg: "#00b074" }}
                >
                  Search
                </Button>
              </Stack>
            </Flex> */}
            <SearchBox/>
            {!data && loading ? (
              <VStack spacing="24px" w="100%">
                <Skeleton isLoaded={!loading} w="100%">
                  <JobListItem
                    title="Hello"
                    location="loading"
                    imgUrl="loading"
                    postDate="loading"
                    key={1}
                  />
                </Skeleton>
                <Skeleton isLoaded={!loading} w="100%">
                  <JobListItem
                    title="Hello"
                    location="loading"
                    imgUrl="loading"
                    postDate="loading"
                    key={2}
                  />
                </Skeleton>
              </VStack>
            ) : (
              <VStack spacing="24px" w="100%" align="flex-start">
                <Text>
                  {data?.getJobs.jobs.length} results for {title} {location}
                </Text>
                {data?.getJobs.jobs.map((job) => (
                  <JobListItem
                    title={job.title}
                    location={job.location}
                    imgUrl={job.imgUrl}
                    postDate={job.createdDate}
                    key={job.id}
                    companyName={job.company.name}
                    id={job.id}
                    salary={job.salary}
                  />
                ))}
                {data?.getJobs.hasMore ? (
                  <Flex mx="auto" align="center">
                    <Button
                      isLoading={loading}
                      onClick={() => {
                        fetchMore({
                          variables: {
                            limit: variables.limit,
                            cursor:
                              data.getJobs.jobs[
                                data.getJobs.jobs.length - 1
                              ].createdAt,
                          },
                        });
                      }}
                    >
                      Load More
                    </Button>
                  </Flex>
                ) : null}
              </VStack>
            )}
          </VStack>
        </Flex>
      </MainLayout>
    </>
  );
};

index.value = "L2";

export default withApollo({ ssr: false })(index);
