import { Flex, Heading, Wrap, WrapItem } from '@chakra-ui/layout';
import React from 'react';
import { VStack } from '@chakra-ui/react';
import { CategoryCard } from './CategoryCard';
import {CgWorkAlt} from 'react-icons/cg'



interface HeroCategoryProps{

}


export const HeroCategory: React.FC<HeroCategoryProps> = ({}) => {
        return (
            <Flex w="80%" mx="auto" py="3%">
            <VStack align="flex-start">
                <Flex>
                <Heading>Explore by category</Heading>
                </Flex>
                <Wrap >
                    <WrapItem>
                        <CategoryCard title="Business Development" jobs={415} iconColor="green.400" boxColor="green.100" icon={CgWorkAlt}/>
                    </WrapItem>
                    <WrapItem>
                        <CategoryCard title="Customer Service" jobs={235} iconColor="blue.400" boxColor="blue.100" icon={CgWorkAlt}/>
                    </WrapItem>
                    <WrapItem>
                        <CategoryCard title="Design" jobs={235} iconColor="orange.400" boxColor="orange.100" icon={CgWorkAlt}/>
                    </WrapItem>
                    <WrapItem>
                        <CategoryCard title="Marketing & Management" jobs={235} iconColor="pink.400" boxColor="pink.100" icon={CgWorkAlt}/>
                    </WrapItem>
                    <WrapItem>
                        <CategoryCard title="Information Tech" jobs={235} iconColor="cyan.400" boxColor="cyan.100" icon={CgWorkAlt}/>
                    </WrapItem>
                    <WrapItem>
                        <CategoryCard title="Commucation and Sales" jobs={235} iconColor="purple.400" boxColor="purple.100" icon={CgWorkAlt}/>
                    </WrapItem>
                </Wrap>
                
            </VStack>
            </Flex>
            
        );
};