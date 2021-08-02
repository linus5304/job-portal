import React from "react";
import {TableLayout} from '../../components/table/TableLayout'
import {columns, data, options} from '../../utils/data'

interface ApplicantsProps {}

const Applicants: React.FC<ApplicantsProps> & {Layout: string} = ({}) => {
  return (
    <>
          <TableLayout columns={columns} data={data} listTitle="Applicant's" listNumber={12} options={options}/>
</>
  );
};

Applicants.Layout = "L1";
export default Applicants;
