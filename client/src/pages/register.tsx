import {
  Box, Button, Divider, Flex, Heading, Link, Text, useColorModeValue, useToast, VStack
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/form/InputField";
import { PasswordField } from "../components/form/PasswordField";
import { MainLayout } from "../components/layouts/MainLayout";
import { toErrorMap } from "../utils/errorMap";
import { withApollo } from "../utils/withApollo";
import {
  useCreateCompanyProfileMutation, useCreateJsProfileMutation, useRegisterMutation
} from "./../generated/graphql";
import { user_type, job_category } from "../utils/sample-data";


interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  const [register] = useRegisterMutation();
  const [createJSProfile] = useCreateJsProfileMutation();
  const [createCompProfile] = useCreateCompanyProfileMutation();
  const router = useRouter();
  const toast = useToast();
  return (
    <MainLayout variant="small">
      <Formik
        initialValues={{ username: "", email: "", password: "", user_type: "" }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          const response = await register({
            variables: { data: values },
            update: (cache) => {
              cache.evict({ fieldName: "register" });
            },
          });

          console.log(response?.data)
          if(response.data?.register.errors){
            setErrors(toErrorMap(response?.data.register.errors))
          }

          if (response?.data?.register?.user?.user_type === "job seeker") {
            await createJSProfile({
              variables: {
                data: { email: response.data?.register.user.email },
              },
            });
            router.push({ pathname: "/account/job-seeker" });
          }
          if (response?.data?.register?.user?.user_type === "company") {
            await createCompProfile({
              variables: {
                data: { email: response.data?.register?.user.email },
              },
            });
            router.push({ pathname: "/account/company" });
          }
        }}
      >
        {({ isSubmitting }) => (
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
                  Register
                </Heading>
                <Divider />
              </Flex>

              <Form>
                <VStack spacing={6}>
                  <InputField
                    name="username"
                    placeholder="Username"
                    label="Username"
                  />
                  <InputField name="email" placeholder="Email" label="Email" />
                  <PasswordField
                    label="Password"
                    placeholder="Password"
                    name="password"
                    loginOrRegister={false}
                  />
                  <InputField
                    name="user_type"
                    placeholder="Select a user"
                    label="User Type"
                    select
                    options={user_type}
                  />
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    w="100%"
                    bg="#00b074"
                    color="white"
                    size="lg"
                    _hover={{ bg: "green.500" }}
                  >
                    Register
                  </Button>
                </VStack>
                <Flex gridGap="2%" fontSize="sm" mt="3%">
                  <Text fontSize="sm">Already have account?</Text>
                  <NextLink href="/login">
                    <Link fontSize="sm" color="#00b074" fontWeight="semibold">
                      Login
                    </Link>
                  </NextLink>
                </Flex>
              </Form>
            </Flex>
          </Box>
        )}
      </Formik>
    </MainLayout>
  );
};

export default withApollo({ ssr: false })(Register);
