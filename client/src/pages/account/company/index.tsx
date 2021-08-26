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
import { Formik, Form } from "formik";
import { InputField } from "../../../components/form/InputField";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  useCreateCompanyProfileMutation,
  useFileUploadMutation,
  useGetCompanyByIdQuery,
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,
} from "../../../generated/graphql";
import Dropzone from "react-dropzone";
import { MainLayout } from "../../../components/layouts/MainLayout";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";

import { withApollo } from "../../../utils/withApollo";
import { FiUploadCloud } from "react-icons/fi";

interface indexProps {}

export const index: React.FC<indexProps> = ({}) => {
  const router = useRouter();
  const [uploadFile] = useFileUploadMutation();
  const [img, setImg] = useState(() => "");
  const [name, setName] = useState("");
  const { data, loading } = useGetCompanyProfileQuery();
  const [updateCompProfile] = useUpdateCompanyProfileMutation();

  if (!data && loading) {
    return <div>loading</div>;
  }

  return (
    <DashboardLayout>
      <Formik
        initialValues={{
          name: data?.getCompanyProfile.name,
          website: data?.getCompanyProfile.website,
          phone: data?.getCompanyProfile.phone,
          location: data?.getCompanyProfile.location,
          logo: data?.getCompanyProfile.logo,
          description: data?.getCompanyProfile.description,
          email: data?.getCompanyProfile.email,
          founded_date: data?.getCompanyProfile.founded_date
        }}
        onSubmit={async (values) => {
          const response = await updateCompProfile({
            variables: { data: values, id: data.getCompanyProfile.id },
          });
          //   if (!response.data.createCompanyProfile) {
          //     toast({
          //       title: "Account created.",
          //       position: "top-right",
          //       description: "Error occured when creating your profile",
          //       status: "error",
          //       duration: 5000,
          //       isClosable: true,
          //     });
          //   } else {
          //     toast({
          //       title: "Account created.",
          //       position: "top-right",
          //       description: "We've created your account for you.",
          //       status: "success",
          //       duration: 5000,
          //       isClosable: true,
          //     });
          //     router.push("/");
          //   }
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
                    <InputField name="location" label="Location" select/>
                  </HStack>
                  <HStack align="flex-start" w="100%" spacing="30px">
                    <InputField name="website" label="Website Link" />
                    <InputField name="founded_date" label="Founded Date" type="date"/>
                  </HStack>
                  

                  <InputField name="description" label="Description" textarea />

                  <Dropzone
                    onDrop={async ([file]) => {
                      const { data } = await uploadFile({
                        variables: { imgUrl: file },
                      });
                      setFieldValue("logo", data.fileUpload.url);
                      setImg((img) => (img = data.fileUpload.url));
                      setName((name) => (name = file.name));

                      console.log(file, data.fileUpload.url);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Flex {...getRootProps()}>
                        <input {...getInputProps()} name="logo" />
                        <Button leftIcon={<FiUploadCloud />}>add Image</Button>
                        {name ? <Text>{name}</Text> : null}
                      </Flex>
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

export default withApollo({ ssr: false })(index);
