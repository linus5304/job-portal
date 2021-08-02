import { UploadOutlined } from '@ant-design/icons';
import { Form, Row, Col, Input, Upload, Button } from 'antd';
import React from 'react';
import { FormWrapper } from './FormWrapper';
import { LoginInfo } from './LoginInfo';
import { RichText } from './RichText';


interface EmployerRegisterProps{

}


export const EmployerRegister: React.FC<EmployerRegisterProps> = ({}) => {
        return (
            <div className="container">
            <FormWrapper heading="CREATE EMPLOYER PROFILE" wrapperVariant="medium">
      
        <Form name="basic" wrapperCol={{ span: 24 }} layout="vertical">
        <LoginInfo/>
        <Row justify="space-between">
            <Col span={11}>
              <Form.Item label="Email" name="email">
              <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item label="Full Name" name="fullname">
              <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
        <Row justify="space-between">
            <Col span={11}>
              <Form.Item label="Password" name="password">
              <Input.Password size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item label="Company Name" name="company-name">
              <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
        <Row justify="space-between">
            <Col span={11}>
              <Form.Item label="Contact" name="contact">
              <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item label="Website" name="website">
              <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
          
          <Form.Item label="Logo" name="logo">
          <Upload >
      <Button icon={<UploadOutlined />}>Upload an Image</Button>
    </Upload>
          </Form.Item>
          <Form.Item label="Location" name="location">
            <Input size="large" placeholder="Location"/>
          </Form.Item>
          <Form.Item label="Company Description" name="description">
            <RichText/>
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