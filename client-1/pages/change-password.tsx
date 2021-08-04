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

interface changePasswordProps {}

export const changePassword: React.FC<changePasswordProps> & layout = ({}) => {
  return (
    <Formik
      initialValues={{ password: "" }}
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
                Change Password
              </Heading>
              <Divider />
            </Flex>

            <Form>
              <VStack spacing={6}>
                <PasswordField
                  label="Password"
                  placeholder="Password"
                  name="password"
                  loginOrRegister={false}
                />
                <Button
                  type="submit"
                  size="lg"
                  fontSize="md"
                  isLoading={isSubmitting}
                >
                  Update
                </Button>
              </VStack>
            </Form>
          </Flex>
        </Box>
      )}
    </Formik>
  );
};

changePassword.value = "L2";
changePassword.variant = "sm";
export default changePassword;
