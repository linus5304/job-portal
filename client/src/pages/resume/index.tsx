import { Flex, VStack, Skeleton, Button } from "@chakra-ui/react";
import React from "react";
import { Filter } from "../../components/Filter";
import { JobListItem } from "../../components/JobListItem";
import { MainLayout } from "../../components/layouts/MainLayout";
import { ResumeListItem } from "../../components/ResumeListItem";
import { SearchBox } from "../../components/SearchBox";
import { useGetAllJsProfileQuery } from "../../generated/graphql";
import { withApollo } from "../../utils/withApollo";

interface indexProps {}

export const index: React.FC<indexProps> = ({}) => {
  const { data, loading } = useGetAllJsProfileQuery();
  

  if (!data && loading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <MainLayout>
        <Flex justify="space-between" mx="auto" w="60%" pt="10%" pb="4%">
          {/* <VStack
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
          </VStack> */}
          <VStack align="flex-start" w="100%" spacing="30px">
            <SearchBox />
            {/* {!data && loading ? (
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
            <VStack spacing="24px" w="100%" align="flex-start">
            <Text>{data?.getJobs.jobs.length} results for UI Designer</Text>
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
                            data.getJobs.jobs[data.getJobs.jobs.length - 1]
                              .createdAt,
                        },
                      });
                    }}
                  >
                    Load More
                  </Button>
                </Flex>
              ) : null}
            </VStack>
            )} */}

            {data?.getAllJSProfile.map((js) => (
              <ResumeListItem
                name={`${js.first_name} ${js.last_name}`}
                position={js.about_me.slice(0, 50)}
                location="Yaounde"
                imgUrl={js.profile_pic}
                description={js.about_me}
                title={js.title}
                id={js.id}
              />
            ))}
          </VStack>
        </Flex>
      </MainLayout>
    </>
  );
};

export default withApollo({ ssr: false })(index);
