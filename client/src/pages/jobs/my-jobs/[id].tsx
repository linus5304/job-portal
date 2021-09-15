import React from "react";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import { withApollo } from "../../../utils/withApollo";

interface ApplicantsProps {}

const Applicants: React.FC<ApplicantsProps> = ({}) => {
  return (
    <DashboardLayout>
      <div>Applicants</div>
    </DashboardLayout>
  );
};

export default withApollo({ ssr: false })(Applicants);
