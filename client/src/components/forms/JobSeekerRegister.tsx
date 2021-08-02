import { Form, Input, Button } from "antd";
import React from "react";
import { FormWrapper } from "./FormWrapper";
import { LoginInfo } from "./LoginInfo";

interface JobSeekerRegisterProps {}

export const JobSeekerRegister: React.FC<JobSeekerRegisterProps> = ({}) => {
  return (
    <div className="container">
      <FormWrapper heading="CREATE JOB SEEKER PROFILE" wrapperVariant="medium">
        <Form name="basic" wrapperCol={{ span: 24 }} layout="vertical">
          <LoginInfo/>
          <Form.Item label="Full Name" name="fullname">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10 }}>
            <Button type="primary" htmlType="submit" size="large">
              Register
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </div>
  );
};
