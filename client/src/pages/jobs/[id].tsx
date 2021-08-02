import React from 'react';
import { DescriptionWrapper } from '../../components/description/DescriptionWrapper';

interface JobItemProps{

}


 const JobItem: React.FC<JobItemProps> & {Layout: string} = ({}) => {
        return (
            <>
            <DescriptionWrapper/>
            </>
        );
};

JobItem.Layout = 'L2'
export default JobItem