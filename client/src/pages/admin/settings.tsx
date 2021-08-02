import { Form, Input, InputNumber, Button, Card, Col, Row } from "antd";
import React from "react";
import { ImgUpload } from "./../../components/ImgUpload";

interface settingsProps {
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const layoutCol6 = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const settings: React.FC<settingsProps> & {Layout: string} = ({}) => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <h2>Update Company Profile</h2>
      <Card>
        <Form
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          {...layout}
        >
           
              <Form.Item wrapperCol={{ offset: 10 }}>
                <ImgUpload />
              </Form.Item>
            
            

     
              <Form.Item name={["user", "name"]} label="Company Name">
                <Input size="large" />
              </Form.Item>
            
              <Form.Item name={["user", "email"]} label="Cooperate type">
                <Input size="large" />
              </Form.Item>
       
        
              <Form.Item label="Employee Size">
                <Input size="large" />
              </Form.Item>
          
              <Form.Item label="Location">
                <Input size="large" />
              </Form.Item>
            

          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name={["user", "website"]} label="Website">
            <Input size="large" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10 }}>
            <Button type="primary" htmlType="submit" size="large">
              Update Proile
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

settings.Layout = "L1";

export default settings;
