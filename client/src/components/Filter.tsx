import React, { ReactText } from 'react';
import { Checkbox, CheckboxGroup, Text, Flex } from "@chakra-ui/react"
import {checboxItem} from './../utils/types'
import {FilterCheckbox} from './FilterCheckbox'

interface FilterProps{
    heading: string
    values?:string[];
}


export const Filter: React.FC<FilterProps> = ({heading, values}) => {
        return (
            <>
            <Flex flexDirection="column">
            <Text fontSize={24} fontWeight="bold" mb="2%">{heading}</Text>
            <CheckboxGroup onChange={((value: ReactText[]) => console.log(value))}>
                {values.map(v => (
                    <FilterCheckbox value={v} key={v}/>
                ))}
                
            </CheckboxGroup>
            </Flex>
            
            </>
        );
};