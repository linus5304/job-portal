import { Skeleton, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import { useGetCompanyJobsQuery } from "../../../generated/graphql";
import { withApollo } from "../../../utils/withApollo";
import { InputField } from "./../../../components/form/InputField";
import { ManageJobItem } from "./../../../components/ManageJobItem";

interface MyJobsProps {}

const MyJobs: React.FC<MyJobsProps> = ({}) => {
  const { data, loading } = useGetCompanyJobsQuery();

  return (
    <DashboardLayout>
      {!data && loading ? (
        <VStack spacing="24px" w="100%">
          <Skeleton isLoaded={!loading} w="100%">
            <ManageJobItem
              title="Hello"
              location="loading"
              imgUrl="loading"
              postDate="loading"
              key={1}
            />
          </Skeleton>
          <Skeleton isLoaded={!loading} w="100%">
            <ManageJobItem
              title="Hello"
              location="loading"
              imgUrl="loading"
              postDate="loading"
              key={2}
            />
          </Skeleton>
        </VStack>
      ) : (
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
                // bg="#fff"
              />
            </Form>
          </Formik>
          <Text fontSize="1.2em" weight="semibold">
            {data?.getCompanyJobs.length} Job Postings
          </Text>
          {data?.getCompanyJobs.map((j) => (
            <ManageJobItem
              key={j.id}
              title={j.title}
              companyName={j.user.companyProfile.name}
              id={j.id}
              salary={j.salary}
              location={j.location}
              postDate={j.createdAt}
              description={j.description}
              expDate={j.expDate}
              category={j.category}
              applicants={j.application.length}
            />
          ))}
        </VStack>
      )}
    </DashboardLayout>
  );
};

export default withApollo({ ssr: false })(MyJobs);
