import React from "react";
import { Hero } from "../../components/Hero";
import { Row, Col, Space, Button } from "antd";
import { JobListItem } from "../../components/JobListItem";
import { Filter } from "../../components/filter/Filter";

type jobsComponent = React.FC & {Layout : string}

// interface jobsProps {}

const jobs: jobsComponent = ({}) => {
  return (
    <>
      <Hero heroVariant="small"/>
      <div className="container">
        <div style={{ paddingTop: "10%",  paddingBottom: "5%"}}>
           
          <Row gutter={[48, 16]}>
            <Col span={4} >
            
                <Space size={30} direction="vertical">
                <Filter title="Jobs Type" values={['Full Time', 'Part Time', 'Contract']}/>
                <Filter title="Experience Level" values={["All", "Senior", "Mid", 'Junior']}/>
                <Filter title="Region" values={["All", "Yaiunde", "Douala", 'Bafoussam']}/>
                </Space>
            </Col>
            <Col span={20}>
            <h2>9 Jobs Found</h2> 
              <JobListItem />
              <JobListItem />
              <div className="btn-center">
              <Button type="primary" size="large" loading={false}>Load more</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

jobs.Layout = "L2";

export default jobs;
