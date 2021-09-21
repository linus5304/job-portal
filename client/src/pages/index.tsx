import React from 'react';
import { FeaturedJobs } from '../components/FeaturedJobs';
import { HelpSection } from '../components/HelpSection';
import { Hero } from '../components/Hero';
import { HeroCategory } from '../components/HeroCategory';
import { HeroContact } from '../components/HeroContact';
import { HeroPost } from '../components/HeroPost';
import { MainLayout } from "../components/layouts/MainLayout";
import { withApollo } from '../utils/withApollo';


export type layout = {
  value: string, variant?:string
}
export const config = {
  unstable_runtimeJS: false
};

const IndexPage : React.FC<{}> & layout = () => {
  return(
    <>
    <MainLayout >
    <Hero/>
    {/* <CompanySection heading="Featured Companies"/> */}
    <HeroCategory/>
    <HelpSection/>
    <FeaturedJobs/>
    <HeroPost/>
    <HeroContact/>    
    
    </MainLayout>
    </>
  )
}
 

IndexPage.value = 'L2'

export default withApollo({ssr: false}) (IndexPage)
