import React from 'react';
import {VStack, Flex,Text, HStack, Icon} from '@chakra-ui/react'
import {MdWork} from 'react-icons/md'
import {FiCalendar} from 'react-icons/fi'


interface EducationDescProps{
degree?:string
startDate?:any
endDate?:any
}


export const EducationDesc: React.FC<EducationDescProps> = ({degree, startDate, endDate}) => {
        return (
            <VStack align="flex-start">
                <Text fontSize="xl" fontWeight="semibold">{degree} Masters in Software Engineering</Text>
                <HStack >
                
                                      <Flex alignItems="center">
                    <Icon as={FiCalendar} fontSize="lg" />
                    <Text>{startDate} - {endDate}</Text>
                  </Flex>
                
                                      <Flex alignItems="center">
                    <Icon as={MdWork} fontSize="lg" />
                    <Text>IAI Cameroon</Text>
                  </Flex>
                </HStack>
            </VStack>
        );
};