import { Box, VStack } from "@chakra-ui/layout";
import React from "react";
import { AppliedJobItem } from "../../../components/AppliedJobItem";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import { Empty } from "../../../components/svg/Empty";
import { useGetApplicantJobsQuery } from "../../../generated/graphql";
import { withApollo } from "../../../utils/withApollo";

interface appliedJobsProps {}

const appliedJobs: React.FC<appliedJobsProps> = ({}) => {
  const { data, loading } = useGetApplicantJobsQuery({
    fetchPolicy: "cache-and-network",
  });

  if (!data && loading) {
    return <div>Loading...</div>;
  }
  

  return (
    <DashboardLayout>
      <VStack w="100%">
        {data?.getApplicantJobs.length === 0 ? (
          <Empty />
        ) : (
          <VStack w="100%">
            {data?.getApplicantJobs.map((j) => (
              
              <AppliedJobItem
                title={j.title}
                companyName={j.user.companyProfile.name}
                // postDate={j.application[0].appication_date}
                location={j.location}
                key={j.id}
                id={j.id}
              />
            ))}
          </VStack>
        )}
      </VStack>
    </DashboardLayout>
  );
};

export default withApollo({ ssr: false })(appliedJobs);
