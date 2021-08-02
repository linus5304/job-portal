import { Card } from 'antd';
import Link from 'next/link';
import React from 'react';


interface LoginInfoProps{

}


export const LoginInfo: React.FC<LoginInfoProps> = ({}) => {
        return (
            <Card  style={{marginBottom:'5%'}} hoverable>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>    
                <div>Already have an account?</div>
                <div className="a-link"><Link href="/login" >Login</Link>    </div>
                </div>
            </Card>
        );
};