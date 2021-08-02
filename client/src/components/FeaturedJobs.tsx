import React from 'react';
import { HomeLayout } from './layouts/HomeLayout';
import { JobListItem } from './JobListItem';


interface FeaturedJobsProps{

}


export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({}) => {
        return (
            <div className="featured-jobs-section">
                <div className="section-heading">
              Featured Job
          </div>
                <div className="container">
                <JobListItem />
                <JobListItem />
                <JobListItem />
                <JobListItem />
                </div>
            </div>
        );
};

export default FeaturedJobs;