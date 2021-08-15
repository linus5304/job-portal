import {
  Button, Divider,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, Text, VStack
} from "@chakra-ui/react";
import React from "react";
import { Dashboard } from "../Dashboard";
import { JobListItem } from "../JobListItem";

interface CompanyAccountProps {}

export const CompanyAccount: React.FC<CompanyAccountProps> = ({}) => {
  return (
    <VStack py="6%" spacing="2%">
      <Heading>MY ACCOUNT</Heading>
      <Tabs isFitted={true}>
        <TabList gridGap={20}>
          <Tab>
            <Text fontSize="lg" fontWeight="bold">
              Dashboard
            </Text>
          </Tab>
          <Tab>
            <Text fontSize="lg" fontWeight="bold">
              Job Postings
            </Text>
          </Tab>
          <Tab>
            <Text fontSize="lg" fontWeight="bold">
              Company Profile
            </Text>
          </Tab>
        </TabList>
        <Divider bg="black" size="lg" w="100%" />

        <TabPanels>
          <TabPanel>
            <Dashboard />
          </TabPanel>
          <TabPanel>
            <VStack w="100%" align="flex" spacing="30px">
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">
                    5 JOBS POSTINGS
                  </Text>
                  <Button bg="#fff">POST A JOB</Button>
                </Flex>
                
              <JobListItem
                title="Credit analys"
                id={1}
                location="Douala"
                imgUrl="/images/bg2.jpg"
                postDate="2021-08-01"
                companyName="Talanta"
              />
            </VStack>
          </TabPanel>
          <TabPanel>
            <Text>Company Profile</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
