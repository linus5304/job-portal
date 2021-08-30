import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  HStack,
  toast,
  useColorModeValue,
  VStack,
  useToast,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/router";
import React, { useState } from "react";
import { InputField } from "../components/form/InputField";
import { layout } from "../utils/types";
import NextLink from "next/link";
import Dropzone, { useDropzone } from "react-dropzone";
import {
  usePostJobMutation,
  useFileUploadMutation,
} from "./../generated/graphql";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { withApollo } from "../utils/withApollo";
import { FiUploadCloud } from "react-icons/fi";

interface postJobProps {}

export const postJob: React.FC<postJobProps> & layout = ({}) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const toast = useToast();
  const [postJob] = usePostJobMutation();
  const [img, setImg] = useState(() => "");
  const [uploadFile] = useFileUploadMutation();
  const [name, setName] = useState("");

  return (
    <DashboardLayout>
      <Formik
        initialValues={{
          title: "",
          category: "",
          salary: "",
          location: "",
          expDate: "",
          description: "",
          imgUrl: img,
        }}
        onSubmit={async (values) => {
          const result = await postJob({
            variables: { data: values },
          });
          if (!result.data) {
            toast({
              title: "Failed to post job.",
              position: "top-right",
              description: "Error could not post job",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          } else if (result.data) {
            toast({
              title: "Job post Successful.",
              position: "top-right",
              description: "You successfully post a job.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            router.push(`/company/${result.data.postJob.userId}`);
          }
          console.log(values);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Box w="100%" overflow="auto">
            <Flex
              bg={useColorModeValue("white", "gray.700")}
              py={4}
              px={{ base: "4", md: "10" }}
              shadow="base"
              rounded={{ sm: "lg" }}
              flexDir="column"
            >
              <Flex mb="2%" flexDirection="column">
                <Text fontSize="1.5em" fontWeight="semibold" mb={2}>
                  Post A Job
                </Text>
                <Divider />
              </Flex>

              <Form>
                <Flex fontWeight="bold">
                  <InputField name="login" placeholder="" label="" hidden />
                </Flex>

                <VStack spacing={4} align="flex-start">
                  <InputField name="title" label="Title" />
                  <HStack w="100%">
                    <InputField name="category" label="Category" select />
                    <InputField name="salary" label="Salary" type="text" />
                  </HStack>
                  <HStack w="100%">
                    <InputField name="location" label="Location" />
                    <InputField
                      name="expDate"
                      label="Expiration Date"
                      type="date"
                    />
                  </HStack>
                  <InputField name="description" label="Description" textarea />

                  <Dropzone
                    onDrop={async ([file]) => {
                      const { data } = await uploadFile({
                        variables: { imgUrl: file },
                      });
                      setFieldValue("imgUrl", data.fileUpload.url);
                      setImg((img) => (img = data.fileUpload.url));
                      setName((name) => (name = file.name));

                      console.log(file);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        border="1px dashed gray"
                        h="100px"
                        w="100%"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} name="imgUrl" />
                        <VStack>
                          <Icon as={FiUploadCloud} fontSize="2em" />
                          <Text>Drag and drop or Click to Add Image</Text>
                        </VStack>
                        {name ? <Text>{name}</Text> : null}
                      </Box>
                    )}
                  </Dropzone>

                  <Button
                    bg="#00b074"
                    color="white"
                    size="lg"
                    _hover={{ bg: "#00b074" }}
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Post Job
                  </Button>
                </VStack>
              </Form>
            </Flex>
          </Box>
        )}
      </Formik>
    </DashboardLayout>
  );
};

postJob.value = "L2";
postJob.variant = "md";
export default withApollo({ ssr: false })(postJob);
