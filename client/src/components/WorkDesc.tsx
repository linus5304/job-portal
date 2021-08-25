import React from 'react';
import {VStack, Flex,Text, HStack, Icon} from '@chakra-ui/react'
import {MdWork} from 'react-icons/md'
import {FiCalendar} from 'react-icons/fi'
import {FaGraduationCap} from 'react-icons/fa'


interface WorkDescProps{
degree?:string
startDate?:any
endDate?:any
}


export const WorkDesc: React.FC<WorkDescProps> = ({degree, startDate, endDate}) => {
        return (
            <VStack align="flex-start">
                <Text fontSize="xl" fontWeight="semibold">{degree} Masters in Software Engineering</Text>
                <HStack >
                
                                      <Flex alignItems="center">
                    <Icon as={FiCalendar} fontSize="lg" />
                    <Text>{startDate} - {endDate}</Text>
                  </Flex>
                
                                      <Flex alignItems="center">
                    <Icon as={FaGraduationCap} fontSize="lg" />
                    <Text>IAI Cameroon</Text>
                  </Flex>
                </HStack>
            </VStack>
        );
};