import React from 'react';
import { layout } from '../login';

import { HeroJob } from './../../components/HeroJob';
import { Flex, VStack, Button, Text } from '@chakra-ui/react';
import { Filter } from './../../components/Filter';
import {JobListItem} from './../../components/JobListItem'

interface indexProps{

}


export const index: React.FC<indexProps> & layout= ({}) => {
        return (
            <>
                <HeroJob/>
                <Flex justify="space-between" mx="auto" w="60%" pt="10%" pb="4%">
                    <VStack spacing="24px" align="flex-start" display={['none', 'none', 'none','flex', 'flex']}>
                    <Filter values={['Full Time', 'Part time', 'contract']} heading="Job Types"/>
                    <Filter values={['All', 'Yaounde', 'Douala', 'Bafoussam']} heading="Region"/>
                    <Filter values={['All', 'Senior', 'Mid', 'Junior']} heading="Experience Level"/>
                    </VStack>
                    <VStack spacing="24px" w="100%">
        <JobListItem />
        <JobListItem />
        <JobListItem />
        <JobListItem />
        <Flex mx="auto" align="center">
                <Button>Load More</Button>
            </Flex>
      </VStack>
            
                </Flex>

            </>
        );
};

index.value = 'L2'


export default index