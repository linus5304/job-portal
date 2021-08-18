import { useApolloClient } from "@apollo/client";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";
import Dropzone from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import {
  useFileUploadMutation,
  useGetJsProfileQuery,
  useUpdateJsProfileMutation,
} from "../../generated/graphql";
import { JobListItem } from "../JobListItem";
import { InputField } from "./../form/InputField";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";

interface UserAccountProps {}

export const UserAccount: React.FC<UserAccountProps> = ({}) => {
  const { data } = useGetJsProfileQuery();
  const [updateProfile] = useUpdateJsProfileMutation();
  const [uploadFile] = useFileUploadMutation();
  const apolloClient = useApolloClient();
  
  console.log(data?.getJSProfile)
 
  const router = useRouter();

  return (
    <>
    
      <VStack py="6%" spacing="2%">
        <Heading>MY ACCOUNT</Heading>
        <Tabs>
          <TabList gridGap={20}>
            <Tab>
              <Text fontSize="lg" fontWeight="bold">
                My Resumes
              </Text>
            </Tab>
            <Tab>
              <Text fontSize="lg" fontWeight="bold">
                My Applications
              </Text>
            </Tab>
            <Tab>
              <Text fontSize="lg" fontWeight="bold">
                Account Settings
              </Text>
            </Tab>
          </TabList>
          <Divider bg="black" size="lg" w="100%" />

          <TabPanels>
            <TabPanel>
              <JobListItem
                title="Credit analys"
                id={1}
                location="Douala"
                imgUrl="/images/bg2.jpg"
                postDate="2021-08-01"
                companyName="Talanta"
              />
            </TabPanel>
            <TabPanel>
              <VStack w="100%">
                <JobListItem
                  title="Credit analys"
                  id={1}
                  location="Douala"
                  imgUrl="/images/bg2.jpg"
                  postDate="2021-08-01"
                  companyName="Talanta"
                />
              </VStack>
            </TabPanel>
            <TabPanel bg="#fff" borderRadius="4px">
              <VStack>
                <HStack minW="100%" justify="space-around" align="flex-start">
                  <Text fontSize="lg" fontWeight="semibold">
                    Personal Detail
                  </Text>

                  <Flex>
                    <Formik
                      initialValues={{
                        first_name: data?.getJSProfile.first_name,
                        last_name: data?.getJSProfile.last_name,
                        email: data?.getJSProfile.email,
                        about_me: data?.getJSProfile.about_me,
                        profile_pic: data?.getJSProfile.about_me,
                      }}
                      onSubmit={async (values) => {
                        const response = await updateProfile({
                          variables: {
                            id: data?.getJSProfile.id,
                            data: values,
                          },
                        });
                        // apolloClient.restore()
                        console.log(values, data?.getJSProfile.id);
                      }}
                    >
                      {({ isSubmitting, setFieldValue }) => (
                        <Form>
                          <VStack>
                            <InputField
                              name="first_name"
                              label="First Name"
                            />
                            <InputField
                              name="last_name"
                              label="Last Name"
                            />
                            <InputField
                              name="email"
                              label="Email"
                            />
                            <InputField
                              name="about_me"
                              label="About"
                              textarea
                            />
                            <Flex alignItems="center" gridGap={5}>
                              <Avatar
                                size="xl"
                                name="ok boys"
                                src={''}
                              />
                              <Dropzone
                                onDrop={async ([file]) => {
                                  const { data } = await uploadFile({
                                    variables: { imgUrl: file },
                                  });
                                  setFieldValue(
                                    "profile_pic",
                                    data.fileUpload.url
                                  );
                                }}
                              >
                                {({ getRootProps, getInputProps }) => (
                                  <Flex {...getRootProps()}>
                                    <input
                                      {...getInputProps()}
                                      name="profile_pic"
                                    />
                                    <Button leftIcon={<FiUploadCloud />}>
                                      update Image
                                    </Button>
                                    {/* {name ? (<Text>{name}</Text> ): null} */}
                                  </Flex>
                                )}
                              </Dropzone>
                            </Flex>
                            <Button type="submit" isLoading={isSubmitting}>
                              Update
                            </Button>
                          </VStack>
                        </Form>
                      )}
                    </Formik>
                  </Flex>
                </HStack>

                <Divider />
                <VStack
                  minW="100%"
                  justify="space-around"
                  align="flex-start"
                  pl="10%"
                >
                  <Education jsId={data?.getJSProfile.id}/>
                </VStack>
                <Divider />
                <VStack
                  minW="100%"
                  justify="space-around"
                  align="flex-start"
                  pl="10%"
                >
                  <WorkExperience jsId={data?.getJSProfile.id}/>
                </VStack>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
};
