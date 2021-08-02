import React from "react";
import { useRouter } from "next/router";
import { EmployerRegister } from "../../components/forms/EmployerRegister";
import { JobSeekerRegister } from "../../components/forms/JobSeekerRegister";

// interface EmployerJSRegisterProps {}
type EmployerJSRegisterComponent = React.FC<{}> & {Layout: string}

function onChange(date, dateString) {
  console.log(date, dateString);
}

const EmployerJSRegister: EmployerJSRegisterComponent = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  let data;
  if (id === "employer") {
    data = <EmployerRegister />;
  } else if (id === "job-seeker") {
    data = <JobSeekerRegister />;
  }
  return ( <>{data}</> );
};

EmployerJSRegister.Layout = "L2";

export default EmployerJSRegister;
