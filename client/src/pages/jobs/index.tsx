import {
  Button, Flex, Icon,
  Input,
  Stack, Text, VStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import { Empty } from "../../components/svg/Empty";
import { Spinner } from "../../components/svg/Spinner";
import { withApollo } from "../../utils/withApollo";
import { layout } from "../login";
import { JobListItem } from "./../../components/JobListItem";
import { MainLayout } from "./../../components/layouts/MainLayout";
import {
  useGetJobsQuery,
  useSearchJobsQuery
} from "./../../generated/graphql";


interface indexProps {}

export const index: React.FC<indexProps> & layout = ({}) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const { data, loading, fetchMore, variables, error } = useGetJobsQuery({
    variables: { limit: 5, cursor: null },
    // fetchPolicy: "no-cache"
  });
  const { data: sData } = useSearchJobsQuery({
    variables: {
      title: title,
      location: location,
    },
  });

  // const { data, loading, error, fetchMore, variables } = useSearchJobsQuery({
  //   variables: { title, location, limit: 10, cursor: null },
  // });

  if (!data && loading) {
    return <Spinner/>
  }

  if (error) {
    return <Text>{error.message}</Text>;
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
            <Flex p={8} bg="white" boxShadow="lg" borderRadius="lg" w="100%">
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
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
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
            </Flex>
            {title !== "" ? (
              // <VStack spacing="24px" w="100%">
              //   <Skeleton isLoaded={!loading} w="100%">
              //     <JobListItem
              //       title="Hello"
              //       location="loading"
              //       imgUrl="loading"
              //       postDate="loading"
              //       key={1}
              //     />
              //   </Skeleton>
              //   <Skeleton isLoaded={!loading} w="100%">
              //     <JobListItem
              //       title="Hello"
              //       location="loading"
              //       imgUrl="loading"
              //       postDate="loading"
              //       key={2}
              //     />
              //   </Skeleton>
              // </VStack>
              <VStack w="100%" alignItems="flex-start">
                {sData?.searchJobs.length === 0 ? (
                  <VStack>
                    <Text>No Jobs Found</Text>
                    <Empty />{" "}
                  </VStack>
                ) : (
                  <Text>
                    {sData?.searchJobs.length} results for Your search
                  </Text>
                )}
                <>
                  {sData?.searchJobs.map((job) => (
                    <JobListItem
                      title={job.title}
                      location={job.location}
                      imgUrl={job.imgUrl}
                      postDate={job.createdDate}
                      key={job.id}
                      companyName={job.user.companyProfile.name}
                      id={job.id}
                      salary={job.salary}
                    />
                  ))}
                </>
              </VStack>
            ) : (
              <VStack spacing="24px" w="100%" align="flex-start">
                {data?.getJobs.jobs.map((job) => (
                  <JobListItem
                    title={job.title}
                    location={job.location}
                    imgUrl={job.imgUrl}
                    postDate={job.createdDate}
                    key={job.id}
                    companyName={job.user.companyProfile.name}
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
            )}
          </VStack>
        </Flex>
      </MainLayout>
    </>
  );
};

index.value = "L2";

export default withApollo({ ssr: false })(index);
