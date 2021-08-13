import React from "react";
import { Flex, Text, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { CompanyCard } from "./CompanyCard";
import { useGetCompaniesQuery } from './../generated/graphql';

interface CompanySectionProps {
  heading?:string
}

export const CompanySection: React.FC<CompanySectionProps> = ({heading}) => {
  const {data} = useGetCompaniesQuery()
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
          {heading}
        </Text>
      </Flex>
      <Wrap justify="center" mx="auto" alignItems="center">
        {data?.getCompanies.map(company => (
            <WrapItem>
          <CompanyCard name={company.name} imgUrl={company.logo} description={company.description} key={company.id} id={company.id}/>
        </WrapItem>
        
        ))}
        
        
      </Wrap>
    </Flex>
  );
};
