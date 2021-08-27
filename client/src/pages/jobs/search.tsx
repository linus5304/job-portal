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
} from "@chakra-ui/react";
import { Filter } from "./../../components/Filter";
import { JobListItem } from "./../../components/JobListItem";
import { useSearchJobsQuery } from "./../../generated/graphql";
import { useRouter } from "next/router";
import { MainLayout } from "./../../components/layouts/MainLayout";
import { withApollo } from "../../utils/withApollo";
import { SearchBox } from "../../components/SearchBox";

interface searchProps {}

export const search: React.FC<searchProps> & layout = ({}) => {
  const [newLimit, setNewLimit] = useState(5);
  const router = useRouter();

  const { data, loading, error, fetchMore, variables } = useSearchJobsQuery({
    variables: {
      title: '%'+(router.query.title as string)+'%',
      location: router.query.location as string,
      limit: 10,
      cursor: null,
    },
  });

  console.log('%'+router.query.title+'%', router.query.location);

  if (!data && !loading) {
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
                  {data?.searchJobs.jobs.length} results for {router.query.title} {router.query.location}
                </Text>
                {data?.searchJobs.jobs.map((job) => (
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
                {data?.searchJobs.hasMore ? (
                  <Flex mx="auto" align="center">
                    <Button
                      isLoading={loading}
                      onClick={() => {
                        fetchMore({
                          variables: {
                            limit: variables.limit,
                            cursor:
                              data.searchJobs.jobs[
                                data.searchJobs.jobs.length - 1
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

search.value = "L2";

export default withApollo({ ssr: false })(search);
