import React from "react";
import { VStack, Text, Stack, Flex, Icon } from "@chakra-ui/react";
import { InputField } from "./../../components/form/InputField";
import { ManageJobItem } from "./../../components/ManageJobItem";
import { DashboardLayout } from "../../components/layouts/DashboardLayout";
import { withApollo } from "../../utils/withApollo";
import { Formik, Form } from "formik";

interface MyJobsProps {}

const MyJobs: React.FC<MyJobsProps> = ({}) => {
  return (
    <DashboardLayout>
      <VStack w="100%" align="flex-start">
        <Formik
          initialValues={{ title: "", location: "" }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          <Form>
            <InputField
              type="search"
              placeholder="Job Title"
              name="title"
              bg="#fff"
            />
          </Form>
        </Formik>
        <Text fontSize="1.2em" weight="semibold">
          5 Job Postings
        </Text>
        <ManageJobItem
          title="designer"
          companyName="Google"
          id={1}
          salary="20000"
        />
      </VStack>
    </DashboardLayout>
  );
};

export default withApollo({ ssr: false })(MyJobs);
