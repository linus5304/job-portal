import React from 'react';
import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { withApollo } from "../../../utils/withApollo";


interface savedJobsProps{

}


export const savedJobs: React.FC<savedJobsProps> = ({}) => {
        return (
            <DashboardLayout>
                <div>Saved jobs</div>
            </DashboardLayout>
        );
};

export default withApollo({ ssr: false })(savedJobs);