import React from 'react';
import {Button, Space, Divider} from 'antd'


interface JobsByProps{

}


export const JobsBy: React.FC<JobsByProps> = ({}) => {
        return (
            <div className="jobs-by">
                <div className="container d-flex">
                    
                    <div className="hero-text-a">

                    <h1>Most comprehensive job portal</h1>
                    <p>We must explain to you how all this mistaken idea of denouncing</p>
                    </div>
                    <Space size={24}>
                        <Button size="large">Login</Button>
                        <Button size="large" style={{fontWeight: 'bold', background:'#F3EFFA'}}>Sign Up</Button>
                    </Space>
                </div>

            </div>

        );
};