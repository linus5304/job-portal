import React from "react";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import { withApollo } from "../../../utils/withApollo";

interface applicantsProps {
  
}

const applicants: React.FC<applicantsProps> = ({
  
}) => {


  return (
    <DashboardLayout>
      applicants
    </DashboardLayout>
  );
};

export default withApollo({ ssr: false })(applicants);
