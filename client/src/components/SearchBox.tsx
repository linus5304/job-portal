import React from "react";
import { AutoComplete, Card, Input, Button, Col, Row } from "antd";
import {GoLocation} from 'react-icons/go';

interface SearchBoxProps {}

export const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  return (
    <div className="hero-search">
      <Card
        bordered={true}
        style={{ boxShadow: "0px 0px 9px -1px rgba(0,0,0,0.75)", padding: '1.5%' }}
      >
        <Row gutter={[24, 16]} justify="space-between" style={{textAlign:'center'}}>
          <Col span={10}>
            <Input placeholder="Job Title" size="large"/>
          </Col>
          <Col span={10}>
            <Input.Group size="large">
              <AutoComplete
                style={{ width: "100%", textAlign:'start' }}
                placeholder="Location"
                options={[{ value: "text 1" }, { value: "text 2" }]}
                size="large"
              />
            </Input.Group>
          </Col>
          <Col span={4}>
            <Button type="primary" size="large" style={{width: '100%'}}>
              Search
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
