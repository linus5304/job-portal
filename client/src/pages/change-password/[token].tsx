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
import React, {useState} from "react";
import { InputField } from "../../components/form/InputField";
import { PasswordField } from "../../components/form/PasswordField";
import { useChangePasswordMutation } from "../../generated/graphql";
import { layout } from "./../login";
import {useRouter} from 'next/router'
import { toErrorMap } from './../../utils/errorMap';
import NextLink from 'next/link'

interface changePasswordProps {}

export const changePassword: React.FC<changePasswordProps> & layout = ({}) => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter()
  const [tokenError, setTokenError] = useState('')
  return (
    <Formik
      initialValues={{ password: "" }}
      onSubmit={async (values, {setErrors}) => {
        const response = await changePassword({
          variables: { newPassword: values.password, token: typeof router.query.token === "string" ? router.query.token : "" },
        });
        if (response.data.changePassword.errors) {
          const errorMap = toErrorMap(response.data.changePassword.errors)
          if('token' in errorMap){
            setTokenError(errorMap.token)
          }
          setErrors(errorMap)
        }

        if(response.data.changePassword.user){
            router.push('/')
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
                {tokenError ? (
                    <Flex>
                    <Box mr={2} color="red">
                        {tokenError}
                    </Box>
                    <NextLink href="/forgot-password">
                        <Link>click here to get a new one </Link>
                    </NextLink>
                </Flex>
                ) : null}
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
