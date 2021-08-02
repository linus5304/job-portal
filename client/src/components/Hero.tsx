import React from "react";
import { Card } from "antd";
import { SearchBox } from './SearchBox';

export type heroVariant = 'large' | 'small'
interface HeroProps {
  heroVariant?: string;
  text?:string;
  subtext?:string;
}

export const Hero: React.FC<HeroProps> = ({heroVariant = 'large', text, subtext}) => {
  let height
  if(heroVariant === 'large'){
    height = '440px'
  }else if(heroVariant === 'small'){
    height = '200px'
  }
  return (
    <div className="hero-section" style={{height: height}}>
      <div className="hero-text" >
        <h1>{text}</h1>
        <p>{subtext}</p>
      </div>
      <SearchBox/>
    </div>
  );
};
