import { Flex, Stack, Button, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/router";
import React from "react";
import { InputField } from "./form/InputField";

interface HeroSearchBoxProps {}

export const HeroSearchBox: React.FC<HeroSearchBoxProps> = ({}) => {
  return (
    <>
    <Flex
      p={2}
      bg="white"
      boxShadow="lg"
      borderRadius="lg"
      align="flex-start"
    >
      <Formik
        initialValues={{ title: "", location: "" }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        <Form>
          <Stack
            direction={["column", "column", "column", "row", "row"]}
            spacing={["16px", "16px", "16px", "24px"]}
            alignItems="center"
          >
            <InputField variant="flushed" placeholder="Job Title" name="title" label="Search Type"/>

            <InputField variant="flushed" name="location" placeholder="Location" label="Location"/>
            <Flex>
              <Button w={["100%", "100%", "100%", "150px"]} type="submit" bg="#00b074" color="white" size="lg" _hover={{bg:"#00b074"}}>
                Explore Now
              </Button>
            </Flex>
          </Stack>
        </Form>
      </Formik>
    </Flex>
    <Flex gridGap="2px"><Text>Search key word eg: </Text> <Text fontWeight="semibold">Prduct Designer</Text></Flex>
    </>
  );
};
