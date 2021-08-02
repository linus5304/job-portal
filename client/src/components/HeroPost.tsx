import React from "react";
import {Button} from 'antd'

interface HeroPostProps {}

export const HeroPost: React.FC<HeroPostProps> = ({}) => {
  return (
    <div className="hero-post-section">
      <div className="container">
        <div className="hero-text">
          <h2>POST YOUR JOB TODAY</h2>
          <p>Job seekers will be able to find your first-class job</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button type="default" size="large" style={{width: '40%'}}>Post Job</Button>
        </div>
      </div>
    </div>
  );
};
