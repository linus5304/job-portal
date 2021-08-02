import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

interface EmployerCardProps {}

export const EmployerCard: React.FC<EmployerCardProps> = ({}) => {
  return (
    <Card
      hoverable
      style={{ width: 240, height: 300 }}
      cover={
        <img
          alt="example"
          src="/images/logo.png"
        />
      }
    >
      <Meta title="Europe Street beat" />
    </Card> 
  );
};
