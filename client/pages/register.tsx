import { Box, Flex, useColorModeValue, Text,Heading, Divider, VStack, Button, Link } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react';
import { InputField } from '../components/form/InputField';
import { PasswordField } from '../components/form/PasswordField';
import { layout } from './login';
import  NextLink  from 'next/link';


interface RegisterProps{

}



export const Register: React.FC<RegisterProps> & layout = ({}) => {
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
                Register
              </Heading>
              <Divider />
            </Flex>

            <Form>
              <VStack spacing={6}>
                <InputField
                  name="username"
                  placeholder="Username "
                  label="Username"
                />
                <InputField
                  name="email"
                  placeholder="Email"
                  label="Email"
                />
                <PasswordField
                  label="Password"
                  placeholder="Password"
                  name="password"
                  loginOrRegister={false}
                />
                <InputField
                  name="User Type"
                  placeholder="Select a user"
                  label="User Type"
                  select
                />
                <Button
                  type="submit"
                  size="lg"
                  fontSize="md"
                  isLoading={isSubmitting}
                >
                  Register
                </Button>
              </VStack>
              <Flex gridGap="2%" fontSize="sm" mt="3%">
                  <Text fontSize="sm">Already have account?</Text>
                  <NextLink href="/login"><Link fontSize="sm" color="#470137" fontWeight="semibold">Login</Link></NextLink>
              </Flex>
            </Form>
          </Flex>
        </Box>
      )}
    </Formik>
        );
};


Register.value = 'L2'
Register.variant = 'sm'
export default Register