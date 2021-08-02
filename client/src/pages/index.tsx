import React  from "react";

import { Home } from "../components/Home";

type indexComponent = React.FC & {Layout: string}

// interface indexProps {}
const index: indexComponent = ({}) => {
  return (
    <Home/>
  );
};

index.Layout = "L2"
export default index;
