import React from "react";
import { Carousel } from "antd";
import { EmployerCard } from "./EmployerCard";

interface EmployersProps {}

export const Employers: React.FC<EmployersProps> = ({}) => {
  return (
      <div className="container" style={{padding: '3% 0'}}>
        <div className="section-heading">Featured Companies</div>
        <div className="hero-employer-section">
          <EmployerCard />
          <EmployerCard />
          <EmployerCard />
          <EmployerCard />
          </div>
      </div>
    
  );
};

