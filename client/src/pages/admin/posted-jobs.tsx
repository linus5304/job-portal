import React from "react";
import {TableLayout} from '../../components/table/TableLayout'
import {columns, data, options} from '../../utils/data'

interface PostedJobsProps {}

const PostedJobs: React.FC<PostedJobsProps> & {Layout: string} = ({}) => {
  return (
    <>
          <TableLayout columns={columns} data={data} listTitle="Posted Jobs" listNumber={4} options={options}/>
</>
  );
};

PostedJobs.Layout = "L1";
export default PostedJobs;
