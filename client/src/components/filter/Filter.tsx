import React from "react";
import { FilterCheckbox } from "./FilterCheckbox";
import { Checkbox } from "antd";

interface FilterProps {
    title: string;
    values: string[]
}
function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

export const Filter: React.FC<FilterProps> = ({title, values}) => {
  return (
    <>
      <h2 style={{ fontSize: "1.2em", fontWeight: "bold" }}>{title}</h2>
      <Checkbox.Group onChange={onChange} style={{display:'flex', flexDirection:'column'}}>
          {values.map(value => (
              
                <FilterCheckbox value={value} key={value}/>
              
          ))}   
        
        
      </Checkbox.Group>
    </>
  );
};
