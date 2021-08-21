import {
  Box,
  Heading,
  Flex,
  Divider,
  VStack,
  HStack,
  Button,
  useColorModeValue,
  Text,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { layout } from "../utils/types";
import { Formik, Form } from "formik";
import { InputField } from "../components/form/InputField";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  useCreateCompanyProfileMutation,
  useFileUploadMutation,
} from "../generated/graphql";
import Dropzone from "react-dropzone";
import { MainLayout } from "../components/layouts/MainLayout";
import { DashboardLayout } from "../components/layouts/DashboardLayout";

import { withApollo } from "../utils/withApollo";
import { FiUploadCloud } from "react-icons/fi";

interface createProfileProps {}

const createProfile: React.FC<createProfileProps> & layout = ({}) => {
  const router = useRouter();
  const [createCompanyProfile] = useCreateCompanyProfileMutation();
  const [uploadFile] = useFileUploadMutation();
  const [img, setImg] = useState(() => "");
  const [name, setName] = useState("");

  const toast = useToast();

  return (
    <DashboardLayout>
      <Formik
        initialValues={{
          name: "",
          website: "",
          phone: "",
          location: "",
          logo: "",
          description: "",
        }}
        onSubmit={async (values) => {
          const response = await createCompanyProfile({
            variables: { data: values },
          });
          if (!response.data.createCompanyProfile) {
            toast({
              title: "Account created.",
              position: "top-right",
              description: "Error occured when creating your profile",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Account created.",
              position: "top-right",
              description: "We've created your account for you.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            router.push("/");
          }
          console.log(values);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Box w="100%">
            <Flex
              bg={useColorModeValue("white", "gray.700")}
              px={{ base: "4", md: "10" }}
              py={4}
              shadow="base"
              rounded={{ sm: "lg" }}
              flexDir="column"
            >
              <Flex mb="2%" flexDirection="column">
                <Text fontSize="1.5em" fontWeight="semibold" mb={2}>
                  Company Profile
                </Text>
                <Divider />
              </Flex>

              <Form>
                <Flex fontWeight="bold">
                  <InputField name="login" placeholder="" label="" hidden />
                </Flex>

                <VStack spacing={4} align="flex-start">
                  <HStack align="flex-start" w="100%" spacing="30px">
                    <InputField name="name" label="Company name" />
                    <InputField name="email" label="Email" />
                  </HStack>
                  <HStack align="flex-start" w="100%" spacing="30px">
                    <InputField name="phone" label="Phone" />
                    <InputField name="location" label="Location" />
                  </HStack>
                  <HStack align="flex-start" w="100%" spacing="30px">
                  <InputField name="website" label="Website Link" />
                  <InputField name="foundedDate" label="Founded Date" />
                  </HStack>
                  <HStack align="flex-start" w="100%" spacing="30px">
                  <InputField name="category" label="Category" select />
                  <InputField name="country" label="Country" />
                  </HStack>

                 
                  

                  <InputField name="description" label="Description" textarea />

                  {/* <Dropzone
                    onDrop={async ([file]) => {
                      const { data } = await uploadFile({
                        variables: { imgUrl: file },
                      });
                      setFieldValue("logo", data.fileUpload.url);
                      setImg((img) => (img = data.fileUpload.url));
                      setName(name => name = file.name)
                      
                      console.log(file);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Flex {...getRootProps()}>
                        <input {...getInputProps()} name="logo" />
                        <Button leftIcon={<FiUploadCloud />}>add Image</Button>
                        {name ? (<Text>{name}</Text> ): null}
                        
                      </Flex>
                    )}
                  </Dropzone> */}

                    <Button bg="#00b074" color="white" size="lg" _hover={{bg:"#00b074"}} type="submit" isLoading={isSubmitting}>
                      Update Profile
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

createProfile.value = "L2";
createProfile.variant = "md";
export default withApollo({ ssr: false })(createProfile);
