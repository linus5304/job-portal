import { Card, Form, Input, Checkbox, Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import { FormWrapper } from '../../components/forms/FormWrapper';
import {FaUser,FaRegBuilding } from 'react-icons/fa'


// interface RegisterProps{

// }

type RegisterComponent = React.FC & {Layout: string}

 const Register: RegisterComponent = ({}) => {
        return (
            <div className="container card-center">
        <Card style={{ width: 500 }}>
          <FormWrapper wrapperVariant="large" heading="CREATE AN ACCOUNT">
            <Form name="basic" wrapperCol={{ span: 24 }} layout="vertical">
                <div style={{textAlign: 'center', padding:'2%'}}>Choose an account type</div>
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                  <Link href="/register/job-seeker">
                  <Card style={{background: '#470137',  color:'#fff', textAlign:'center'}} hoverable>
                    <FaUser style={{fontSize:'2em'}}/>
                    <div>Job Seeker</div>
                    </Card>
                  </Link>
                  <Link href="/register/employer">
                  <Card style={{background: '#470137',  color:'#fff', textAlign:'center'}} hoverable>
                    <FaRegBuilding style={{fontSize:'2em'}}/>
                    <div>Employer</div>
                    </Card>
                  </Link>
                  </div>
              
              
              
            </Form>
          </FormWrapper>
        </Card>
      </div>
        );
};
Register.Layout = 'L2'
export default Register;