import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Heading,
  Divider,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../components/form/InputField";
import { PasswordField } from "../components/form/PasswordField";
import { layout } from "./login";
import NextLink from "next/link";

interface forgotPasswordProps {}

export const forgotPassword: React.FC<forgotPasswordProps> & layout = ({}) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        console.log(values);
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
                Forgot Password
              </Heading>
              <Divider />
            </Flex>

            <Form>
              <VStack spacing={6}>
                <InputField
                  name="email"
                  placeholder="Enter your email"
                  label="Email"
                />

                <Button
                  type="submit"
                  size="lg"
                  fontSize="md"
                  isLoading={isSubmitting}
                >
                  Send
                </Button>
              </VStack>
              <Flex gridGap="2%" fontSize="sm" mt="3%">
                <Text fontSize="sm">Already have account?</Text>
                <NextLink href="/login">
                  <Link fontSize="sm" color="#470137" fontWeight="semibold">
                    Log in
                  </Link>
                </NextLink>
              </Flex>
            </Form>
          </Flex>
        </Box>
      )}
    </Formik>
  );
};

forgotPassword.value = "L2";
forgotPassword.variant = "sm";
export default forgotPassword;
