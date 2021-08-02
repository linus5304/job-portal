import React from "react";
import {Employers} from "./Employers";
import { FeaturedJobs } from "./FeaturedJobs";
import { Hero } from "./Hero";
import { HeroPost } from "./HeroPost";
import { JobsBy } from "./JobsBy";
import { LatestJobs } from "./LatestJobs";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Hero heroVariant='large' text="SEARCH 9 LIVE JOBS" subtext="Finding your new job just got easier"/>
      <Employers />
      <HeroPost />
      <FeaturedJobs />
      <LatestJobs />
      <JobsBy />
    </>
  );
};
