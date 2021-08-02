import React from 'react';
import { PostJob } from '../../components/forms/PostJob';
import {Divider} from 'antd'

// interface NewJobProps{

// }

type newJobComponent = React.FC & {Layout: string}


 const NewJob: newJobComponent = ({}) => {
        return (
            <>
            <div className="container">
           
            <PostJob heading="Post a Job"/>
            </div>
            </>
        );
};

NewJob.Layout = 'L2'

export default NewJob