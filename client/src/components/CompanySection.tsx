import React from "react";
import { Flex, Text, Stack, Wrap, WrapItem, VStack, HStack, Image,LinkBox, Box, LinkOverlay, Heading } from "@chakra-ui/react";
import { CompanyCard } from "./CompanyCard";
import { useGetCompaniesQuery } from './../generated/graphql';

interface CompanySectionProps {
  heading?:string
  
}

export const CompanySection: React.FC<CompanySectionProps> = ({heading}) => {
  const {data} = useGetCompaniesQuery()
  return (
    <Flex bg="#dddddd">
    <Flex h="100%" w="80%" mx="auto" py="3%">
      <VStack spacing="20px" align="flex-start">
        <Heading>
          Featured Companies
        </Heading>
        <Wrap spacing="30px" justify="space-between" w="100%">
        <WrapItem><CompanyCard name="Apple" jobs={20}/></WrapItem>
        <WrapItem><CompanyCard name="Apple" jobs={20}/></WrapItem>
        <WrapItem><CompanyCard name="Apple" jobs={20}/></WrapItem>
        </Wrap>
      
      
      </VStack>
      </Flex>
      </Flex>
      
  );
};
