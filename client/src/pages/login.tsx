import React from "react";
import { FormWrapper } from "../components/forms/FormWrapper";
import { Card, Form, Input, Button, Checkbox , Divider} from "antd";
import Link from 'next/link'

// interface loginProps {
  
// }

type loginComponent = React.FC & {Layout: string}

export const login: loginComponent = ({}) => {
  return (
    <>
      <div className="container card-center">
        <Card style={{ width: 500 }}>
          <FormWrapper wrapperVariant="large" heading="SIGN IN">
            <Form name="basic" wrapperCol={{ span: 24 }} layout="vertical">
              <Form.Item label="Email" name="email">
                <Input size="large" placeholder="Email" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input.Password size="large" placeholder="Password" />
                <div className="a-link" style={{fontSize:12}}>
                  <Link href="/forgot-password">Forgot password</Link>
                  </div>
              </Form.Item>
              {/* <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 0, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}
              <Form.Item>
                <div className="btn-center">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ width: "40%" }}
                  >
                    Login
                  </Button>
                </div>
              </Form.Item>
              
                  <div style={{display:'flex',  alignItems:'center'}} className="a-link">
                    <div>Don't have an account?</div>
                  <Link href="/register">Sign Up</Link>
              </div>
            </Form>
          </FormWrapper>
        </Card>
      </div>
    </>
  );
};

login.Layout = "L2";

export default login;
