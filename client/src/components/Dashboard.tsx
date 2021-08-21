import React from "react";
import {
  Flex,
  HStack,
  VStack,
  Text,
  Icon,
  Wrap,
  WrapItem,
  Box,
  Button,
  useColorModeValue,
  Image,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { MdWork, MdLocationOn } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsFunnel, BsEye } from "react-icons/bs";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Flex w="100%">
      <Wrap w="100%">
        <WrapItem>
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
            <HStack
              align="flex-start"
              border="1px solid #fff"
              borderRadius="4%"
              bg="#fff"
              spacing="10px"
              p="4%"
              w="280px"
              transition=".2s ease-out"
              _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
            >
              <Box p="8%" bg="green.100" borderRadius="4%">
                <Icon as={MdWork} fontSize="3em" color="green.400" />
              </Box>
              <LinkOverlay href="#">
                <Text fontSize="xl" fontWeight="semibold">
                  Posted jobs
                </Text>
                <Text fontSize="lg">200 Job vacancies</Text>
              </LinkOverlay>
              
            </HStack>
          </LinkBox>
        </WrapItem>
        
        <WrapItem>
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
            <HStack
              align="flex-start"
              border="1px solid #fff"
              borderRadius="4%"
              bg="#fff"
              spacing="10px"
              p="4%"
              w="280px"
              transition=".2s ease-out"
              _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
            >
              <Box p="8%" bg="green.100" borderRadius="4%">
                <Icon as={BsEye} fontSize="3em" color="green.400" />
              </Box>
              <LinkOverlay href="#">
                <Text fontSize="xl" fontWeight="semibold">
                  Posted jobs
                </Text>
                <Text fontSize="lg">200 Job vacancies</Text>
              </LinkOverlay>
              
            </HStack>
          </LinkBox>
        </WrapItem>
        
        <WrapItem>
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
            <HStack
              align="flex-start"
              border="1px solid #fff"
              borderRadius="4%"
              bg="#fff"
              spacing="10px"
              p="4%"
              w="280px"
              transition=".2s ease-out"
              _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
            >
              <Box p="8%" bg="green.100" borderRadius="4%">
                <Icon as={MdWork} fontSize="3em" color="green.400" />
              </Box>
              <LinkOverlay href="#">
                <Text fontSize="xl" fontWeight="semibold">
                  Posted jobs
                </Text>
                <Text fontSize="lg">200 Job vacancies</Text>
              </LinkOverlay>
              
            </HStack>
          </LinkBox>
        </WrapItem>
        
        
      </Wrap>
    </Flex>
  );
};
