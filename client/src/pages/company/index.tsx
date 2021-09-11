import React from "react";
import { layout } from "../../utils/types";
import { HeroJob } from "./../../components/HeroJob";
import { Flex, Heading, Wrap, WrapItem, Text, VStack } from "@chakra-ui/react";
import { CompanyCard } from "../../components/CompanyCard";
import { MainLayout } from "../../components/layouts/MainLayout";
import { withApollo } from "../../utils/withApollo";
import { useGetCompaniesQuery } from "./../../generated/graphql";
import { SearchBox } from "./../../components/SearchBox";
import NextLink from "next/link";

interface CompaniesProps {}

const Companies: React.FC<CompaniesProps> & layout = ({}) => {
  const { data } = useGetCompaniesQuery();
  return (
    <MainLayout>
      <Flex w="60%" m="auto" pt="10%">
        <SearchBox />
      </Flex>

      <VStack flexDir="column" pt="2%" w="60%" mx="auto" pb={8}>
        <Wrap mx="auto" spacing="30px">
          {data?.getCompanies.map((company) => (
            <NextLink href={`/company/${company.id}`} key={company.id}>
              <WrapItem>
                <CompanyCard
                  name={company.name}
                  imgUrl={company.logo}
                  key={company.id}
                  id={company.id}
                />
              </WrapItem>
            </NextLink>
          ))}
        </Wrap>
      </VStack>
    </MainLayout>
  );
};

Companies.value = "L2";
Companies.variant = "rg";
export default withApollo({ ssr: false })(Companies);
