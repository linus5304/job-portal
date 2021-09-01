import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../../components/form/InputField";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import {
  useFileUploadMutation,
  useGetJsProfileQuery,
  useUpdateJsProfileMutation,
} from "../../../generated/graphql";
import { withApollo } from "../../../utils/withApollo";

interface createProfileProps {}

const index: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [img, setImg] = useState(() => "");
  const [name, setName] = useState("");

  const { data, loading } = useGetJsProfileQuery();
  const [uploadFile] = useFileUploadMutation();
  const [update] = useUpdateJsProfileMutation();

  const toast = useToast();

  return (
    <DashboardLayout>
      {!data && loading ? (
        <Text>Loading</Text>
      ) : (
        <Formik
          initialValues={{
            first_name: data?.getJSProfile.first_name,
            last_name: data?.getJSProfile.last_name,
            email: data?.getJSProfile.email,
            about_me: data?.getJSProfile.about_me,
            profile_pic: data?.getJSProfile.about_me,
            title: data?.getJSProfile.title,
          }}
          onSubmit={async (values) => {
            const result = await update({
              variables: { data: values, id: data?.getJSProfile.id },
            });
            if (result) {
              toast({
                title: "Profile Updated.",
                position: "top-right",
                description: "Update successful\n ",
                status: "success",
                duration: 6000,
                isClosable: false,
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
                    JobSeeker Profile
                  </Text>
                  <Divider />
                </Flex>

                <Form>
                  <Flex fontWeight="bold">
                    <InputField name="login" placeholder="" label="" hidden />
                  </Flex>

                  <VStack spacing={4} align="flex-start">
                    <HStack align="flex-start" w="100%" spacing="30px">
                      <InputField name="first_name" label="First Name" />
                      <InputField name="last_name" label="Last Name" />
                    </HStack>
                    <HStack align="flex-start" w="100%" spacing="30px">
                      <InputField name="email" label="Email" />
                      <InputField name="title" label="Title" />
                    </HStack>

                    <InputField name="about_me" label="About" textarea />

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
      )}
    </DashboardLayout>
  );
};
export default withApollo({ ssr: false })(index);
