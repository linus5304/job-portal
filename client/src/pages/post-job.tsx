import { Box, Button, Divider, Flex, Heading, Stack,HStack, toast, useColorModeValue, VStack, useToast } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import router from 'next/router';
import React from 'react';
import { InputField } from '../components/form/InputField';
import { layout } from '../utils/types';
import NextLink from 'next/link'


interface postJobProps{

}


export const postJob: React.FC<postJobProps> & layout = ({}) => {
    const toast = useToast();

        return (
            <Formik
      initialValues={{
        title: "",
        category: "",
        salary: "",
        location: "",
        expDate: "",
        description: "",
      }}
      onSubmit={async (values) => {
        
        if (true) {
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
        //   router.push("/");
        }
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
                Post a Job
              </Heading>
              <Divider />
            </Flex>

            <Form>
              <Flex fontWeight="bold">
                <InputField name="login" placeholder="" label="" hidden />
              </Flex>

              <VStack spacing={4}>
                <InputField name="title" label="Title" />
                <InputField name="description" label="Description" textarea />
                <HStack w="100%">
                <InputField name="category" label="Category"  select/>
                <InputField name="salary" label="Salary" type="number"/>
                </HStack>
                <HStack w="100%">
                <InputField name="location" label="Location" />
                <InputField name="expDate" label="Expiration Date" type="date" />
                </HStack>
               
                
                <Flex direction="row" >
                    <Button type="submit"  isLoading={isSubmitting}>
                      Post Job
                    </Button>
                  
                </Flex>
              </VStack>
            </Form>
          </Flex>
        </Box>
      )}
    </Formik>
        );
};

postJob.value ="L2"
postJob.variant ="md"
export default postJob