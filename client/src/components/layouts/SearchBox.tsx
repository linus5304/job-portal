import { Flex, Input, Button, Spacer, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AutoFill } from "../AutoFill";
import { Formik, Form } from "formik";
import { InputField } from "./../form/InputField";
import { useSearchJobsQuery } from "./../../generated/graphql";
import { useRouter } from "next/router";

interface SearchBoxProps {}

export const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  const { data } = useSearchJobsQuery({
    variables: { input: { title: "", location: "" } },
  });

  const [title, setTitle] = useState(()=>"");
  const [location, setLocation] = useState(()=>"");

  const router = useRouter();
 

  return (
    <Flex
      justifyContent="space-between"
      px={6}
      py={10}
      mt="auto"
      bg="white"
      w="60%"
      alignSelf="center"
      mb={["-8%", "-8%", "-8%", "-4%"]}
      boxShadow="lg"
      borderRadius="lg"
    >
      <Formik
        initialValues={{ title: "", location: "" }}
        onSubmit={async (values) => {
          setTitle((title) => (title = values.title));
          setLocation((location) => (location = values.location));
          router.push({
            pathname:'/jobs/search',
            query: {title: values.title, location:values.location }
          })
          console.log(values);
        }}
      >
        <Form>
          <Stack
            direction={["column", "column", "column", "row", "row"]}
            spacing={["16px", "16px", "16px", "24px"]}
            w="100%"
            alignItems="center"
            justify="space-between"
          >
            <InputField placeholder="Job Title" name="title" />

            <InputField name="location" placeholder="Location" />
            <Flex>
            <Button w={["100%", "100%", "100%", "200px"]} type="submit">
              Search
            </Button>
            </Flex>
          </Stack>
        </Form>
      </Formik>
    </Flex>
  );
};
