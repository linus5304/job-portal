import React from 'react';
import { MainLayout } from '../../components/layouts/MainLayout';
import { withApollo } from '../../utils/withApollo';


interface profileProps{

}


export const profile: React.FC<profileProps> = ({}) => {
        return (
            <MainLayout>
                <div>Job seeker Profile</div>
            </MainLayout>
            
        );
};

export default withApollo({ssr: false}) (profile)