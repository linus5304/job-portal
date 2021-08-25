import { VStack } from "@chakra-ui/layout";
import React from "react";
import { AppliedJobItem } from "../../../components/AppliedJobItem";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import { ManageJobItem } from "../../../components/ManageJobItem";
import { useGetApplicantJobsQuery } from "../../../generated/graphql";
import { withApollo } from "../../../utils/withApollo";

interface appliedJobsProps {}

const appliedJobs: React.FC<appliedJobsProps> = ({}) => {
  const { data, loading } = useGetApplicantJobsQuery();

  return (
    <DashboardLayout>
      <VStack w="100%">
        {data?.getApplicantJobs.map((j) => (
          <AppliedJobItem
            title={j.title}
            companyName={j.company.name}
            postDate={j.userApplications[0].appication_date}
            location={j.location}
          />
        ))}
      </VStack>
    </DashboardLayout>
  );
};

export default withApollo({ ssr: false })(appliedJobs);
