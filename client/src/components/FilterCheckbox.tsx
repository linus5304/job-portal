import React from 'react';
import {Checkbox} from '@chakra-ui/react'


interface FilterCheckboxProps{
    value?: string
}


export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({value}) => {
        return (
            <Checkbox value={value} border="1px ">{value}</Checkbox>

        );
};