import { Card, Form, Input, Checkbox, Button, AutoComplete } from 'antd';
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
        {/* <Card style={{ width: 500 }}>
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
        </Card> */}
        <div className="container card-center">
        <Card style={{ width: 500 }}>
          <FormWrapper wrapperVariant="large" heading="SIGN UP">
            <Form name="basic" wrapperCol={{ span: 24 }} layout="vertical">
              <Form.Item label="Username" name="username">
                <Input size="large" placeholder="Username" />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input size="large" placeholder="Email" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input.Password size="large" placeholder="Password" />
                
              </Form.Item>
              {/* <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 0, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}
              <Form.Item label="User type" name="user_type">
              <Input.Group size="large">
              <AutoComplete
                style={{ width: "100%", textAlign:'start' }}
                placeholder="Job Seeker or Company?"
                options={[{ value: "Job seeker" }, { value: "Company" }]}
                size="large"
              />
            </Input.Group>
            </Form.Item>
              <Form.Item>
                <div className="btn-center">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ width: "40%" }}
                  >
                    Continue
                  </Button>
                </div>
              </Form.Item>
              <div style={{display:'flex',  alignItems:'center'}} className="a-link">
                    <div>Already have account?</div>
                  <Link href="/login">Log In</Link>
              </div>
                  
            </Form>
          </FormWrapper>
        </Card>
      </div>
      </div>
        );
};
Register.Layout = 'L2'
export default Register;