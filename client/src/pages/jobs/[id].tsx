import React from "react";
import {
  Text,
  Flex,
  VStack,
  HStack,
  Box,
  Button,
  Divider,
  Icon,
  Heading,
  ListItem,
  List,
} from "@chakra-ui/react";
import { layout } from "../login";
import { Image } from "./../../components/Image";
import { MdWork } from "react-icons/md";

interface newJobProps {}

export const newJob: React.FC<newJobProps> & layout = ({}) => {
  return (
    <>
      <Box w="60%" mx="auto" bg="#fff" my="6%" p="2%" borderRadius="lg">
        <VStack align="flex-start" spacing="30px">
          <Flex justifyContent="space-between" w="100%">
            <HStack spacing="10px">
              <Image src="/bg2.jpg" width="80px" height="80px" />
              <VStack spacing="10px" align="flex-start">
                <Text>Product Designer</Text>
                <Text>Air Bnb</Text>
              </VStack>
            </HStack>
            <Flex>19 June 2020</Flex>
          </Flex>

          <HStack>
            <Button>Apply to this Job</Button>
            <Button variant="outline">Save Job</Button>
          </HStack>
          <Divider />
        </VStack>
        <VStack align="flex-start" spacing="30px" pt="3%">
          <Flex justifyContent="space-between" align="flex-start" w="100%">
            <Flex alignItems="center">
              <Icon as={MdWork} fontSize="lg" />
              <Text>Sample Employer</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={MdWork} fontSize="lg" />
              <Text>Sample Employer</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={MdWork} fontSize="lg" />
              <Text>Sample Employer</Text>
            </Flex>
          </Flex>
          <Flex flexDir="column">
            <Flex justifyContent="space-between" align="flex-start">
              <VStack align="flex-start">
                <Heading fontSize="lg" fontWeight="thin">
                  Career Level
                </Heading>
                <Text fontSize="lg" fontWeight="bold">
                  Project Manangement
                </Text>
              </VStack>
              <VStack align="flex-start">
                <Heading fontSize="lg" fontWeight="thin">
                  Type of corporation
                </Heading>
                <Text fontSize="lg" fontWeight="bold">
                  B2B & B2C
                </Text>
              </VStack>
              <VStack align="flex-start">
                <Heading fontSize="lg" fontWeight="thin">
                  Company size
                </Heading>
                <Text fontSize="lg" fontWeight="bold">
                  11-50 employees
                </Text>
              </VStack>
            </Flex>
            <Divider />
            <VStack flexDir="column" spacing="30px">
              <Text fontSize="20px">Job Description</Text>
              <Text>
                Gubagoo is a fast growing provider of messaging and commerce
                solutions for automotive dealers changing the future of how
                people find, buy and service their vehicles.
              </Text>
              <Text fontSize="20px">Your Role:</Text>
              We’re looking for a passionate individual to design beautiful and
              functional products for our customers at Gubagoo. We move very
              fast and you will be expected to contribute to a cross-functional
              product development squad, that includes product managers and
              developers, to deliver the UX and UI for the team to bring to
              life. We are serious about remote work. You can work for from
              anywhere.
              <Text fontSize="20px">What you will be doing:</Text>
              <List spacing="4px">
                <ListItem>
                  Contribute new controls or design improvements to our
                </ListItem>
                <ListItem>
                  Take ownership of the successful delivery of features
                </ListItem>
                <ListItem>Help set and achieve quarterly goals</ListItem>
                <ListItem>
                  Ship a TON of product improvements and features
                </ListItem>
              </List>
            </VStack>
            <Flex>
              <Button size="lg">APPLY TO THIS JOB</Button>
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

newJob.value = "L2";
export default newJob;
