import React from "react";
import { Row, Col, Card, Image, Divider, Avatar, List } from "antd";
import {ListItemDescription} from './ListItemDescription'

interface DescriptionContentProps {}

const data = [
  {
    title: "Ant Design Title 1",
    description:" I love coding in react and ant design"
  },

];

const data_1 = [
    {
      title: "Senior Frontend Developer",
      description:<ListItemDescription startDate="Jan 2021" companyName="Campost Cameroon" skills="AngularJS/2, Ionic/Cordova, JavaScript, Node.js, TypeScript"/>
    },
    {
      title: "Junior Frontend Developer",
      description:<ListItemDescription startDate=" Jan 2014" endDate="Jan 2015" companyName="Blink Inc." skills="AngularJS, Javascript, JQuery, Typescript, "/>
    },
  
  ];
const data_2 = [
    {
      title: "Masters in Computer science",
      description:<ListItemDescription startDate="Jan 2021" schoolName="IAI Cameroon" skills="Programming"/>
    },
    {
      title: "Bachelor in Computer science",
      description:<ListItemDescription startDate=" Jan 2014" endDate="Jan 2015" schoolName="IAI" skills="System administration"/>
    }
  ];


export const DescriptionContent: React.FC<DescriptionContentProps> = ({}) => {
  return (
    <div className="container">
      <Row justify="space-between">
        <Col style={{ padding: "3% 0", width: "60%" }}>
          <div>
            <div className="text-h2">PERSONAL SUMMARY</div>
            <List
                style={{marginLeft: '4%'}}
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item >
                  <List.Item.Meta
                    
                    title={<div className="text-bold">{item.title}</div>}
                    description={<div className="text-bold">{item.description}</div>}
                  />
                </List.Item>
              )}
            />
          </div>
          <div>
            <div className="text-h2">WORK EXPERIENCE</div>
            <List
                style={{marginLeft: '4%'}}
              itemLayout="horizontal"
              dataSource={data_1}
              renderItem={(item) => (
                <List.Item >
                  <List.Item.Meta
                    
                    title={<div className="text-bold">{item.title}</div>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
          <div>
            <div className="text-h2">EDUCATION </div>
            <List
                style={{marginLeft: '4%'}}
              itemLayout="horizontal"
              dataSource={data_2}
              renderItem={(item) => (
                <List.Item >
                  <List.Item.Meta
                    
                    title={<div className="text-bold">{item.title}</div>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col style={{ marginTop: "-4%" }}>
          <Card>
            <div>linusbayere@gmail.com</div>
            <Divider />
            <div>linusbayere@gmail.com</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
