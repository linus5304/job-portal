import {
  Box,
  Button,
  Divider,
  Flex,
  HStack, Text,
  useColorModeValue,
  useToast,
  VStack
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../../components/form/InputField";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import {
  useFileUploadMutation,
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation
} from "../../../generated/graphql";
import { location } from "../../../utils/sample-data";
import { withApollo } from "../../../utils/withApollo";

interface indexProps {}

export const index: React.FC<indexProps> = ({}) => {
  const router = useRouter();
  const [uploadFile] = useFileUploadMutation();
  const { data, loading } = useGetCompanyProfileQuery();
  const [updateCompProfile] = useUpdateCompanyProfileMutation();
  const toast = useToast();

  const [profileImage, setprofileImage] = useState(() => "");

  if (!data && loading) {
    return <div>loading</div>;
  }
  console.log("image ", data?.getCompanyProfile.logo);
  console.log("data", data?.getCompanyProfile);

  if (data?.getCompanyProfile === null) {
    console.log(data?.getCompanyProfile);
  }

  return (
    <DashboardLayout>
      <Formik
        initialValues={{
          name: data?.getCompanyProfile.name,
          website: data?.getCompanyProfile.website,
          phone: data?.getCompanyProfile.phone,
          location: data?.getCompanyProfile.location,
          description: data?.getCompanyProfile.description,
          email: data?.getCompanyProfile.email,
          founded_date: data?.getCompanyProfile.founded_date,
        }}
        onSubmit={async (values) => {
          const response = await updateCompProfile({
            variables: { data: values, id: data.getCompanyProfile.id },
          });
          if (!response.data.updateCompanyProfile) {
            toast({
              title: "Error.",
              position: "top-right",
              description: "Error occured when Udating your profile",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Profile sucessfully Updated",
              position: "top-right",
              description: "We've created your account for you.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
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
                    <InputField name="location" label="Location" select options={location} />
                  </HStack>
                  <HStack align="flex-start" w="100%" spacing="30px">
                    <InputField name="website" label="Website Link" />
                    <InputField
                      name="founded_date"
                      label="Founded Date"
                      type="date"
                    />
                  </HStack>

                  <InputField name="description" label="Description" textarea />

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
