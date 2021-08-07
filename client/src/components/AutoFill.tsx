import React from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteGroup,
} from "@choc-ui/chakra-autocomplete";

const fruits = ["Apple", "Grape", "Pawpaw"];
const countries = ["Korea", "Nigeria", "India"];
interface AutoFillProps {
  placeholder?:string
  title?:string
}

export const AutoFill: React.FC<AutoFillProps> = ({placeholder, title}) => {
  return (
    <AutoComplete rollNavigation >
      <AutoCompleteInput variant="outline" placeholder={placeholder} autoFocus w={["100%","100%","100%",'200px', '300px']} />
      <AutoCompleteList>
        
        <AutoCompleteGroup title={title}>
          {countries.map((option, oid) => (
            <AutoCompleteItem
              key={`countries-${oid}`}
              value={option}
              textTransform="capitalize"
            >
              {option}
            </AutoCompleteItem>
          ))}
        </AutoCompleteGroup>
      </AutoCompleteList>
    </AutoComplete>
  );
};
