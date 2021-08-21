import React from 'react';
import { layout } from '../../utils/types';
import { HeroJob } from './../../components/HeroJob';
import { Flex, Heading, Wrap, WrapItem, Text } from '@chakra-ui/react';
import {CompanyCard} from '../../components/CompanyCard'
import { MainLayout } from '../../components/layouts/MainLayout';
import { withApollo } from '../../utils/withApollo';
import { useGetCompaniesQuery } from './../../generated/graphql';
import {SearchBox} from './../../components/SearchBox'
import NextLink from 'next/link'

interface CompaniesProps{

}


const Companies: React.FC<CompaniesProps> & layout = ({}) => {
  const {data} = useGetCompaniesQuery()
        return (
            <MainLayout>

<Flex w="60%" m="auto" pt="10%">
<SearchBox />  
</Flex>
            
       
   <Flex
      flexDir="column"
      pt="2%"
      w="70%"
      mx="auto"
      justifyContent="center"
      pb={8}
    >
      <Flex mx="auto">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Companies
        </Text>
      </Flex>
      <Wrap mx="auto" spacing="30px">
      {data?.getCompanies.map(company => (
        <NextLink href={`/company/${company.id}`}>
            <WrapItem>
          <CompanyCard name={company.name} imgUrl={company.logo} description={company.description.substr(0, 30)} key={company.id} id={company.id}/>
        </WrapItem>
        </NextLink>
        
        ))}
        
      </Wrap>
    </Flex>
    </MainLayout>
        );
};

Companies.value ="L2"
Companies.variant="rg"
export default withApollo({ssr: false}) (Companies)