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
  Text
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/router";
import React,  {useState}from "react";
import { InputField } from "../components/form/InputField";
import { layout } from "../utils/types";
import NextLink from "next/link";
import Dropzone, {useDropzone} from "react-dropzone"
import { usePostJobMutation, useFileUploadMutation } from './../generated/graphql';


interface postJobProps {}

export const postJob: React.FC<postJobProps> & layout = ({}) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const toast = useToast();
  const [postJob] = usePostJobMutation()
  const [img, setImg] = useState(() =>'')
  const [uploadFile] = useFileUploadMutation()

  return (
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
          variables: {data:values }
        })
        if (!result.data) {
          toast({
            title: "Failed to post job.",
            position: "top-right",
            description: "Error could not post job",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else if(result.data){
          toast({
            title: "Job post Successful.",
            position: "top-right",
            description: "You successfully post a job.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
            router.push(`/company/${result.data.postJob.companyProfileId}`);
        }
        console.log(values);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Box py={20} px={["3%", "3%", "3%", "auto", "auto"]}>
          <Flex
            bg={useColorModeValue("white", "gray.700")}
            py="8"
            px={{ base: "4", md: "10" }}
            shadow="base"
            rounded={{ sm: "lg" }}
            flexDir="column"
          >
            <Flex mb="5%" flexDirection="column">
              <Heading size="xl" textAlign="center" fontWeight="bold" mb={2}>
                Post a Job
              </Heading>
              <Divider />
            </Flex>

            <Form>
              <Flex fontWeight="bold">
                <InputField name="login" placeholder="" label="" hidden />
              </Flex>

              <VStack spacing={4}>
                <InputField name="title" label="Title" />
                <InputField name="description" label="Description" textarea />
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
                <Dropzone
									onDrop={async ([file]) => {
                      const {data} = await uploadFile({
                        variables: {imgUrl: file}
                      })
                      setFieldValue('imgUrl', data.fileUpload.url)
                      setImg((img) =>  img = data.fileUpload.url)
                      console.log(file)
									}}
								>
									{({ getRootProps, getInputProps }) => (
										<Box
											border="1px"
											height="100px"
											{...getRootProps()}
										>
											<input
												{...getInputProps()}
												name="imgUrl"
											/>
											<Text
												textAlign={'center'}
											>
												Drag 'n' drop some files here,
												or click to select files
											</Text>
										</Box>
									)}
								</Dropzone>

                <Flex direction="row">
                  <Button type="submit" isLoading={isSubmitting}>
                    Post Job
                  </Button>
                </Flex>
              </VStack>
            </Form>
          </Flex>
        </Box>
      )}
    </Formik>
  );
};

postJob.value = "L2";
postJob.variant = "md";
export default postJob;
