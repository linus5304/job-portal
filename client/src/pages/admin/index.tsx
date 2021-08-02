import React from "react";
import { Dashboard } from "../../components/Dashboard";

interface indexProps {}

const index: React.FC<indexProps> & {Layout: string} = ({}) => {
  return (
      <Dashboard />
    
  );
};

index.Layout = "L1";

export default index;
