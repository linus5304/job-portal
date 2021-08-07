import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { Hero } from '../components/Hero'
import { HeroContact } from '../components/HeroContact';
import { HeroPost } from '../components/HeroPost';
import { Navbar } from '../components/Navbar'
import { CompanySection } from '../components/CompanySection';
import { FeaturedJobs } from '../components/FeaturedJobs';
import { LatestJobs } from '../components/LatestJobs';

export type layout = {
  value: string, variant?:string
}

const IndexPage : React.FC<{}> & layout = () => {
  return(
    <>
    <Hero/>
    <CompanySection/>
    <HeroPost/>
    <FeaturedJobs/>
    <LatestJobs/>
    <HeroContact/>
    </>
  )
}
 

IndexPage.value = 'L2'

export default IndexPage
