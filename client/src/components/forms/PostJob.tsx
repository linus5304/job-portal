import React from "react";
import { FormWrapper } from "./FormWrapper";
import { RichText } from "./RichText";
import { Form, Input, Button, Row, Col, Divider, DatePicker , AutoComplete} from "antd";

interface PostJobProps {
  heading: string;
}

export const PostJob: React.FC<PostJobProps> = ({heading}) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
     
            
      <FormWrapper heading={heading}>
      
        <Form name="basic" wrapperCol={{ span: 24 }} layout="vertical">
          <Form.Item label="Title" name="title">
            <Input size="large" placeholder="Title"/>
          </Form.Item>

          
          
          <Row justify="space-between">
            <Col span={11}>
              <Form.Item label="Job Type" name="type">
              <Input.Group size="large">
              <AutoComplete
                style={{ width: "100%", textAlign:'start' }}
                placeholder="type"
                options={[{ value: "Full time" }, { value: "Part time" }]}
                size="large"
              />
            </Input.Group>
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item label="Job Category" name="category">
              <Input.Group size="large">
              <AutoComplete
                style={{ width: "100%", textAlign:'start' }}
                placeholder="category"
                options={[{ value: "Developer" }, { value: "Accounting" }]}
                size="large"
              />
            </Input.Group>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Location" name="location">
            <Input size="large" placeholder="Location"/>
          </Form.Item>
        <Row gutter={[24, 16]}>
            <Col span={8}>
              <Form.Item label="Salary Range" name="salary-from">
                <Input
                  size="large"
                  placeholder="from"
                  addonAfter="FCFA"
                  type="number"
                />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label=" " name="salary-to">
                <Input
                  size="large"
                  placeholder="to"
                  addonAfter="FCFA"
                  type="number"
                />
              </Form.Item>
            </Col>
          </Row>
          {/* <Form.Item label="Expiration Date" name="exp-date" wrapperCol={{ span:20}}>
            <DatePicker onChange={onChange} size="large" style={{width: '50%'}}/>
          </Form.Item> */}
          <Form.Item label="Job Description" name="description">
            <RichText/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10 }}>
            <Button type="primary" htmlType="submit" size="large">
              Preview
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </>
  );
};
