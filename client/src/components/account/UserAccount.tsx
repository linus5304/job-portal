import React, { useState } from "react";

import {
  Text,
  Flex,
  Box,
  Button,
  Heading,
  Icon,
  VStack,
  Stack,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  Divider,
  Link,
  Image,
  Avatar,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { JobListItem } from "../JobListItem";
import { InputField } from "./../form/InputField";
import { Form, Formik } from "formik";
import Dropzone from "react-dropzone";
import { FiUploadCloud, FiPlus } from "react-icons/fi";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";

interface UserAccountProps {}

export const UserAccount: React.FC<UserAccountProps> = ({}) => {
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

          <TabPanels >
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
            <TabPanel bg="#fff">
              <VStack>
                <HStack minW="100%" justify="space-around" align="flex-start">
                  <Text fontSize="lg" fontWeight="semibold">
                    Personal Detail
                  </Text>

                  <Flex>
                    <Formik
                      initialValues={{ name: "", email: "" }}
                      onSubmit={(values) => {}}
                    >
                      {() => (
                        <Form>
                          <InputField name="name" label="Name" />
                          <InputField name="email" label="Email" />
                          <InputField name="about" label="About" textarea />
                          <Flex alignItems="center" gridGap={5}>
                    <Avatar
                      size="xl"
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Dropzone
                      onDrop={() => {
                        console.log("hello");
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <Flex {...getRootProps()}>
                          <input {...getInputProps()} name="image" />
                          <Button leftIcon={<FiUploadCloud />}>
                            update Image
                          </Button>
                          {/* {name ? (<Text>{name}</Text> ): null} */}
                        </Flex>
                      )}
                    </Dropzone>
                  </Flex>
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
                  <Education />
                </VStack>
                <Divider />
                <VStack
                  minW="100%"
                  justify="space-around"
                  align="flex-start"
                  pl="10%"
                >
                  <WorkExperience />
                </VStack>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
};
