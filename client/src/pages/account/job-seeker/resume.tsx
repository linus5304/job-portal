import React from "react";
import { Education } from "../../../components/account/Education";
import { WorkExperience } from "../../../components/account/WorkExperience";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import { useGetJsProfileQuery } from "../../../generated/graphql";
import { withApollo } from "../../../utils/withApollo";
import { VStack, Text, Box } from "@chakra-ui/react";

interface resumeProps {}

const resume: React.FC<resumeProps> = ({}) => {
  const { data, loading } = useGetJsProfileQuery({
    fetchPolicy: "cache-and-network",
  });

  console.log("idkfdhfd", data?.getJSProfile.id);

  return (
    <DashboardLayout>
      <VStack bg="#fff" w="100%" p="4%" rounded={{ sm: "lg" }} overflow="auto">
        {!data && loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Text>
              {data?.getJSProfile.id ? data?.getJSProfile.id : "no id"}
            </Text>
            <Education jsId={data?.getJSProfile.id} />
            <WorkExperience jsId={data?.getJSProfile.id} />
          </>
        )}
      </VStack>
    </DashboardLayout>
  );
};

export default withApollo({ ssr: false })(resume);
