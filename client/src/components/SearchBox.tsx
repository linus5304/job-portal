import {
  Flex,
  Divider,
  Input,
  Button,
  Spacer,
  Stack,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { InputField } from "./form/InputField";
import { useSearchJobsQuery } from "./../generated/graphql";
import { useRouter } from "next/router";
import { MdLocationOn, MdSearch } from "react-icons/md";

interface SearchBoxProps {
  
}

export const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  // const { data, loading } = useSearchJobsQuery({
  //   variables: { input: { title: "", location: "" } },
  // });

  const [title, setTitle] = useState(() => "");
  const [location, setLocation] = useState(() => "");
  

  const router = useRouter();
  router.query.title = title
  router.query.location = location

  


  return (
    <Formik
      initialValues={{ title, location }}
      onSubmit={async (values) => {
        setTitle(title)
        setLocation(location)
        router.push({pathname: '/jobs/search', query: {title, location}})
        console.log(values);
      }}
    >
      <Flex p={8} bg="white" boxShadow="lg" borderRadius="lg" w="100%">
        <Form style={{ width: "100%" }}>
          <Stack
            direction={["column", "column", "column", "row", "row"]}
            alignItems="center"
            w="100%"
            justify="space-between"
          >
            <Flex alignItems="center">
              <Icon as={MdSearch} color="#00b074" fontSize="2em" />
              <InputField
                variant="flushed"
                placeholder="Job Title"
                name="title"
              />
            </Flex>
            <Flex alignItems="center">
              <Icon as={MdLocationOn} color="#00b074" fontSize="2em" />
              <InputField
                variant="flushed"
                name="location"
                placeholder="Location"
              />
            </Flex>
            <Button
              type="submit"
              bg="#00b074"
              color="white"
              size="lg"
              _hover={{ bg: "#00b074" }}
            >
              Search
            </Button>
          </Stack>
        </Form>
      </Flex>
    </Formik>
  );
};
