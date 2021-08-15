import React, {useState} from "react";
import { layout } from "../login";

import { HeroJob } from "./../../components/HeroJob";
import { Flex, VStack, Button, Text, Box, Heading, Skeleton } from "@chakra-ui/react";
import { Filter } from "./../../components/Filter";
import { JobListItem } from "./../../components/JobListItem";
import { useSearchJobsQuery } from "./../../generated/graphql";
import {useRouter} from 'next/router'
import { MainLayout } from './../../components/layouts/MainLayout';
import { withApollo } from '../../utils/withApollo';


interface searchProps {}

export const search: React.FC<searchProps> & layout = ({}) => {
  const [newLimit, setNewLimit] = useState(5)
const router = useRouter()
  const { data, loading, error } = useSearchJobsQuery({
    variables: { input: { title: router.query.title as string, location: router.query.location as string } },
  });

  console.log(router.query.title, router.query.location)

 


  if(!data && !loading){
    return <Text>{error.message}</Text>
  }

  return (
    <>
    <MainLayout >
      <HeroJob />
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
          
        ): (
        <VStack spacing="24px" w="100%">
          {data?.searchJobs.map((job) => (
            <JobListItem
              title={job.title}
              location={job.location}
              imgUrl={job.imgUrl}
            //   postDate={job.createdAt}
              key={job.id}
              companyName={job.company.name}
              id={job.id}
            />
          ))}
          {/* {data?.searchJobs.hasMore ? (
            <Flex mx="auto" align="center">
              <Button
                isLoading={loading}
                onClick={() => {
                  fetchMore({
                    variables: {
                      limit: variables.limit,
                      cursor:
                        data.getJobs.jobs[data.getJobs.jobs.length - 1]
                          .createdAt,
                    },
                  });
                }}
              >
                Load More
              </Button>
            </Flex>
          ) : null} */}
        </VStack>
        )}
      </Flex>
      </MainLayout>
    </>
  );
};

search.value = "L2";

export default withApollo({ssr: true})(search);
