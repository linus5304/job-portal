import React from "react";
import { Flex, Text, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { CompanyCard } from "./CompanyCard";

interface CompanySectionProps {}

export const CompanySection: React.FC<CompanySectionProps> = ({}) => {
  return (
    <Flex
      flexDir="column"
      mt={["10%", "10%", "10%", "6%", "6%"]}
      w="70%"
      mx="auto"
      justifyContent="center"
      pb={8}
    >
      <Flex mx="auto">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Featured Companies
        </Text>
      </Flex>
      <Wrap justify="center" mx="auto" alignItems="center">
        <WrapItem>
          <CompanyCard />
        </WrapItem>
        <WrapItem>
          <CompanyCard />
        </WrapItem>
        <WrapItem>
          <CompanyCard />
        </WrapItem>
        <WrapItem>
          <CompanyCard />
        </WrapItem>
      </Wrap>
    </Flex>
  );
};
