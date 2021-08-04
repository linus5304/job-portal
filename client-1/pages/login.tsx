import React from "react";
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
import { InputField } from "../components/form/InputField";
import { Form, Formik } from "formik";
import { PasswordField } from "../components/form/PasswordField";
import NextLink from 'next/link'

interface loginProps {}

export type layout = {
  value: string;
  variant?: string;
};

export const login: React.FC<loginProps> & layout = ({}) => {
  return (
    <Formik
      initialValues={{ usernameOrEmail: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Box py={20} px={['3%', '3%', '3%','auto', 'auto']}>
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
                Login
              </Heading>
              <Divider />
            </Flex>

            <Form>
              <VStack spacing={6}>
                <InputField
                  name="usernameOrEmail"
                  placeholder="Username or Email"
                  label="Username or Email"
                />
                <PasswordField
                  label="Password"
                  placeholder="Password"
                  name="password"
                  loginOrRegister={true}
                />
                <Button
                  type="submit"
                  size="lg"
                  fontSize="md"
                  isLoading={isSubmitting}
                >
                  Login
                </Button>
              </VStack>
              <Flex gridGap="2%" fontSize="sm" mt="3%">
                  <Text fontSize="sm">Don't have account?</Text>
                  <NextLink href="/register"><Link fontSize="sm" color="#470137" fontWeight="semibold">Register</Link></NextLink>
              </Flex>
            </Form>
          </Flex>
        </Box>
      )}
    </Formik>
  );
};

login.value = "L2";
login.variant = "sm";

export default login;
