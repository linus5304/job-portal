import { Checkbox } from 'antd';
import React from 'react';


interface FilterCheckboxProps{
    value: string;
}

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }


export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({value}) => {
        return (
            <Checkbox value={value} style={{fontSize: '1.1em'}}>{value} </Checkbox>
        );
};