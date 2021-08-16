import React from 'react';
import { layout } from '../../utils/types';
import { HeroJob } from './../../components/HeroJob';
import { Flex, Heading, Wrap, WrapItem, Text } from '@chakra-ui/react';
import {CompanyCard} from '../../components/CompanyCard'
import { MainLayout } from '../../components/layouts/MainLayout';
import { withApollo } from '../../utils/withApollo';


interface CompaniesProps{

}


const Companies: React.FC<CompaniesProps> & layout = ({}) => {
        return (
            <MainLayout>

            
            <HeroJob/>
            <Flex
      flexDir="column"
      mt={["10%", "10%", "10%", "6%", "6%"]}
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
      <Wrap justify="center" mx="auto" alignItems="center">
        <WrapItem>
          <CompanyCard />
        </WrapItem>
        <WrapItem>
          <CompanyCard />
        </WrapItem>
        <WrapItem>
          <CompanyCard />
        </WrapItem>
        
      </Wrap>
    </Flex>
    </MainLayout>
        );
};

Companies.value ="L2"
Companies.variant="rg"
export default withApollo({ssr: false}) (Companies)