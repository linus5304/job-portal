import React, { InputHTMLAttributes, useState } from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteGroup,
} from '@choc-ui/chakra-autocomplete';
import { useField, Field, FieldHookConfig } from "formik";
import { Flex, Icon, InputGroup, InputRightElement, Text, useColorModeValue, ListItem, List, VStack } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { InputField } from "./form/InputField";

import Select from 'react-select';

export interface Item {
  label: string;
  value: string
}
const countries=[
  "Acura",
  "BMW",
  "Audi",
  "Bentley",
  "Buick",
  "Cadillac",
  "Chevrolet",
  ]

type AutoFillProps = InputHTMLAttributes<HTMLInputElement>&FieldHookConfig<{}>& {
  placeholder?: string;
  title?: string;
  name: string;
};


export const AutoFill: React.FC<AutoFillProps> = ({
  placeholder,
  title,
  name,
  ...props
}) => {
  const [field] = useField({name, placeholder})
  const [selectedOption, setselectedOption] = useState("")
  const [options, setOptions] = useState([])
  const [search, setSearch] = useState("")
  const handleChange = selectedOption => {
    setselectedOption( selectedOption );
    console.log(`Option selected:`, selectedOption);
  };
  
  return (
    <>
    <InputField name="location" type="search" placeholder="Location"/>
    </>
  )
};
