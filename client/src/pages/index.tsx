import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { Hero } from '../components/Hero'
import { HeroContact } from '../components/HeroContact';
import { HeroPost } from '../components/HeroPost';
import { Navbar } from '../components/Navbar'
import { CompanySection } from '../components/CompanySection';
import { FeaturedJobs } from '../components/FeaturedJobs';
import { LatestJobs } from '../components/LatestJobs';
import { withApollo } from '../utils/withApollo';
import React from 'react';
import { MainLayout } from "../components/layouts/MainLayout";


export type layout = {
  value: string, variant?:string
}

const IndexPage : React.FC<{}> & layout = () => {
  return(
    <>
    <MainLayout >
    <Hero/>
    <CompanySection heading="Featured Companies"/>
    <HeroPost/>
    <FeaturedJobs/>
    <LatestJobs/>
    <HeroContact/>
    </MainLayout>
    </>
  )
}
 

IndexPage.value = 'L2'

export default withApollo({ssr: false}) (IndexPage)
