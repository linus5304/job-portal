import { Flex, Input, Button, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import { AutoFill } from "../AutoFill";

interface SearchBoxProps {}

export const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  return (
    <Flex
      justifyContent="space-between"
      px={6}
      py={10}
      mt="auto"
      bg="white"
      w="60%"
      alignSelf="center"
      mb={['-8%', '-8%', '-8%', '-4%']}
      boxShadow="lg"
      borderRadius="lg"
    >
      <Stack direction={['column','column', 'column', 'row', 'row' ]} spacing={["16px","16px","16px","24px"]} w="100%">
        <Input placeholder="Job Title" />

        <AutoFill placeholder="Location" />
        <Button w={['100%', '100%', '100%', "200px"]}>Search</Button>
      </Stack>
    </Flex>
  );
};
