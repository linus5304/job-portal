import React from 'react';
import {Divider} from 'antd'
export type wrapperVariant = 'large' | 'medium' | 'small'

interface FormWrapperProps{
    wrapperVariant?: string;
    heading?: string;
}



export const FormWrapper: React.FC<FormWrapperProps> = ({wrapperVariant ='medium',heading = "Default Heading", children}) => {
    let width 
    if(wrapperVariant === 'large'){
        width = '80%'
    }else if(wrapperVariant === 'medium'){
        width = '60%'
    }else if(wrapperVariant === 'small'){
        width = '40%'
    }
        return (
            <div style={{width: width, margin:'0 auto'}}>
                <h2 style={{textAlign: 'center', fontSize:'1.5em', fontWeight: 'bold', paddingTop: '2%'}}>{heading}</h2>
                <Divider />
                {children}
            </div>
        );
};