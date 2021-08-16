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
import { withApollo } from "../utils/withApollo";
import { FiUploadCloud } from "react-icons/fi";

interface createProfileProps {}

const createProfile: React.FC<createProfileProps> & layout = ({}) => {
  const router = useRouter();
  const [createCompanyProfile] = useCreateCompanyProfileMutation();
  const [uploadFile] = useFileUploadMutation();
  const [img, setImg] = useState(() => "");
  const [name, setName] = useState("")

  const toast = useToast();

  return (
    <MainLayout variant="medium">
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
                  Create Company Profilex
                </Heading>
                <Divider />
              </Flex>

              <Form>
                <Flex fontWeight="bold">
                  <InputField name="login" placeholder="" label="" hidden />
                </Flex>

                <VStack spacing={4}>
                  <InputField name="name" label="Company name" />
                  <InputField name="website" label="Website" />
                  <InputField name="phone" label="Phone" />
                  <InputField name="location" label="Location" />
                  <InputField name="description" label="Description" textarea />

                  <Dropzone
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
                  </Dropzone>

                  <Stack direction="row" spacing={4}>
                    <Button type="submit" size="lg" isLoading={isSubmitting}>
                      Create Profile
                    </Button>
                    <NextLink href="/">
                      <Button size="lg">Skip</Button>
                    </NextLink>
                  </Stack>
                </VStack>
              </Form>
            </Flex>
          </Box>
        )}
      </Formik>
    </MainLayout>
  );
};

createProfile.value = "L2";
createProfile.variant = "md";
export default withApollo({ ssr: false })(createProfile);
