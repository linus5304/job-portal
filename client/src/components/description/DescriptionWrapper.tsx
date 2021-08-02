import React from "react";
import { Badge, Button } from "antd";
import { FaSuitcase,FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn, } from "react-icons/md";
import { PoweroffOutlined, LeftOutlined } from "@ant-design/icons";
import {DescriptionContent} from './DescriptionContent'

interface DescriptionWrapperProps {}

export const DescriptionWrapper: React.FC<DescriptionWrapperProps> = ({}) => {
  return (
    <>
    <div style={{ height: "270px", background: "#470137" }}>
      <div
        className="container"
        style={{
          padding: "3% 0",
          display:'flex',
          justifyContent:'space-between',
          flexDirection:'column'
        }}
      >
        <div>
          <Button icon={<LeftOutlined />}>Back</Button>
        </div>
        <div style={{ display: "flex",flexDirection:'column', gap: 4 }}>
        <div className="text-h1">John Smith [Resume Sample]</div>
        
          <div style={{ display: "flex", gap: "5%" }} className="text-df">
            <div className="text-icon-center"><FaSuitcase/>Frontend developer</div>
            <div className="text-icon-center"><MdLocationOn/>New York, NY, United States</div>
            <div className="text-icon-center"><FaCalendarAlt/>Jan 24, 2013</div>
        </div>
          <div style={{ display: "flex", gap: "2%" }}>
          <Button shape="round">Full time</Button>
          <Button shape="round">Full time</Button>
          <Button shape="round">Full time</Button>
        </div>
        </div>
      </div>
    </div>
    <DescriptionContent/>
    </>
  );
};
