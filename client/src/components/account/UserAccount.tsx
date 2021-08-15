import React from 'react';

import {
    Text,
    Flex,
    Box,
    Button,
    Heading,
    Icon,
    VStack,
    Stack,
    HStack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useColorModeValue,
    Divider,
    Link,
    Image
  } from "@chakra-ui/react";
  import { JobListItem } from "../JobListItem";


interface UserAccountProps{

}


export const UserAccount: React.FC<UserAccountProps> = ({}) => {
        return (
            <VStack py="6%" spacing="2%" >
                <Heading>MY ACCOUNT</Heading>
                <Tabs>
          <TabList gridGap={20}>
            <Tab>
              <Text fontSize="lg" fontWeight="bold">
                My Resumes
              </Text>
            </Tab>
            <Tab>
              <Text fontSize="lg" fontWeight="bold">
                My Applications
              </Text>
            </Tab>
            <Tab>
              <Text fontSize="lg" fontWeight="bold">
                Account Settings
              </Text>
            </Tab>
          </TabList>
                          <Divider bg="black" size="lg" w="100%"/>


          <TabPanels>
            <TabPanel>
            <JobListItem title="Credit analys" id={1} location="Douala" imgUrl="/images/bg2.jpg" postDate="2021-08-01" companyName="Talanta"/>
            </TabPanel>
            <TabPanel>
              <VStack w="100%">
                  <JobListItem title="Credit analys" id={1} location="Douala" imgUrl="/images/bg2.jpg" postDate="2021-08-01" companyName="Talanta"/>
              </VStack>
            </TabPanel>
            <TabPanel>
                <Text>Settings</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
            </VStack>
        );
};