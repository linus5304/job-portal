import React from "react";
import { Card, Row } from "antd";
import { Col, Select, Form, Space } from "antd";
import { CountCard } from "./CountCard";
import { FaSuitcase, FaUserCircle, FaEye } from "react-icons/fa";
import { FiMousePointer } from "react-icons/fi";
import { TableHead } from "./table/TableHead";
import { options, columns, data } from "../utils/data";
import { TableLayout } from "./table/TableLayout";

interface DashboardProps {}

export const icons = [
  {
    name: <FaSuitcase className="circle-icon" style={{color: '#36cfc9'}}/>,
    deep:'#b5f5ec',
    value: '5',
    description:'Posted Jobs'
  },
  {
    name:<FaUserCircle className="circle-icon" style={{ color:'#f759ab'}}/>,
    deep:'#ffd6e7',
    value:'25',
    description:'Total Applicants'
  },
  {
    name: <FaEye className="circle-icon" style={{color: '#40a9ff'}}/>,
    deep:'#bae7ff',
    value:'25.4k',  
    description:'Job Views'
  },
  {
    name:<FiMousePointer className="circle-icon" style={{color:'#73d13d'}}/>,
    deep:'#d9f7be',
    value:'18.6%',
    description:'Applied Rate'
  }
]



export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <>
      <Row gutter={[24, 24]}>
        {icons.map((icon) => {
          return (
            <Col span={6}>
            <CountCard
              dBg={icon.deep}
              icon={icon.name}
              value={icon.value}
              description={icon.description}
            />
          </Col>
          )
        })}
        
      </Row>
      <TableLayout
        columns={columns}
        data={data}
        listTitle="Applicant's"
        listNumber={12}
        options={options}
      />
      <TableLayout
        columns={columns}
        data={data}
        listTitle="Posted Jobs"
        listNumber={4}
        options={options}
      />
    </>
  );
};
