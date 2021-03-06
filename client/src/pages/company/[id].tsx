import {
  Box,
  Button, Divider, Flex, Heading, HStack, Icon, Image, Link, Stack, Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, Text, useColorModeValue, VStack
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { InputField } from "../../components/form/InputField";
import { JobListItem } from "../../components/JobListItem";
import { MainLayout } from "../../components/layouts/MainLayout";
import { withApollo } from "../../utils/withApollo";
import { useGetCompanyByIdQuery } from "./../../generated/graphql";


interface CompanyProps {}

const Company: React.FC<CompanyProps> = ({}) => {
  const router = useRouter();
  const { id } = router?.query;
  const companyId = parseInt(id as string);

  const { data, error, loading } = useGetCompanyByIdQuery({
    variables: {
      id: companyId,
    },
  });

  if(!data && loading)return <div>loading...</div>  
  if(error){
    return <div>{error.message}</div>
  }
  return (
    <>
      <MainLayout>
        <Flex
          w="100%"
          flexDirection="column"
          bg="#00b074"
          m={0}
          h="100%"
          py="4%"
        >
          <VStack my="auto" ml="10%" align="flex-start">
            <Flex align="flex-start">
              <Button
                size="sm"
                leftIcon={<FaChevronLeft />}
                onClick={() => router.back()}
              >
                Back
              </Button>
            </Flex>
            <Stack
              direction={["column", "column", "column", "row", "row"]}
              color="#fff"
            >
              <Box>
                <Image
                  src={data?.getCompanyById.logo}
                  width="100px"
                  height="100px"
                />
              </Box>
              <Flex flexDir="column" gridGap={3}>
                <Flex>
                  <Heading>{data?.getCompanyById.name}</Heading>
                </Flex>
                <HStack spacing="50px">
                  <Flex alignItems="center">
                    <Icon as={MdLocationOn} fontSize="lg" />
                    <Text>{data?.getCompanyById.location}</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={FiGlobe} fontSize="lg" />
                    <Link>{data?.getCompanyById.website}</Link>
                  </Flex>
                </HStack>
              </Flex>
            </Stack>
          </VStack>
        </Flex>
        <Flex
          h="100%"
          py="4%"
          ml="10%"
          alignItems={[
            "center",
            "center",
            "center",
            "flex-start",
            "flex-start",
          ]}
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
            "row",
          ]}
        >
          <Flex w="60%">
            <Tabs>
              <TabList gridGap={10} color="#00b074">
                <Tab>
                  <Text fontSize="lg" fontWeight="bold">
                    Company Description
                  </Text>
                </Tab>
                <Tab>
                  <Text fontSize="lg" fontWeight="bold">
                    Jobs ({data?.getCompanyById.user.jobs.length})
                  </Text>
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Text>{data?.getCompanyById.description}</Text>
                </TabPanel>
                <TabPanel>
                  <VStack w="100%">
                    {data?.getCompanyById?.user.jobs.map((job) => (
                      <JobListItem
                        title={job.title}
                        id={job.id}
                        location={job.location}
                        imgUrl={job.imgUrl}
                        postDate={job.createdDate}
                        key={job.id}
                        companyName={data?.getCompanyById.name}
                      />
                    ))}
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
          <Flex mt={[0, 0, 0, "-10%", "-10%"]}>
            <Formik
              initialValues={{ email: "" }}
              onSubmit={async (values, { setErrors }) => {
                console.log(values);
              }}
            >
              {({ isSubmitting }) => (
                <Box px={["3%", "3%", "3%", "auto", "auto"]}>
                  <Flex
                    bg={useColorModeValue("white", "gray.700")}
                    py="8"
                    px={{ base: "4", md: "10" }}
                    shadow="base"
                    rounded={{ sm: "lg" }}
                    flexDir="column"
                  >
                    <Flex mb="5%" flexDirection="column">
                      <Text
                        size="lg"
                        textAlign="center"
                        fontWeight="bold"
                        mb={2}
                      >
                        Email me Jobs
                      </Text>
                      <Divider />
                    </Flex>

                    <Form>
                      <VStack spacing={6}>
                        <InputField name="email" placeholder="Email" />
                        <InputField name="interval" placeholder="" select />
                        <Button
                          type="submit"
                          fontSize="md"
                          w="100%"
                          isLoading={isSubmitting}
                          bg="#00b074"
                          color="white"
                          size="lg"
                          _hover={{ bg: "green.500" }}
                        >
                          CREATE ALERT
                        </Button>
                      </VStack>
                    </Form>
                  </Flex>
                </Box>
              )}
            </Formik>
          </Flex>
        </Flex>
      </MainLayout>
    </>
  );
};

export default withApollo({ ssr: false })(Company);
