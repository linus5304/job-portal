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
} from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { MdWork, MdLocationOn } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsFunnel, BsEye } from "react-icons/bs";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Flex>
      <Wrap spacing="30px" flexDirection="column" w="60%">
        <WrapItem>
          <HStack bg="#fff" borderRadius="4%" py="6%" px="4%" w="200px">
            <Flex fontSize="lg" flexDirection="column" w="100%">
              <Text fontWeight="bold">1</Text>
              <Text>Jobs Posted</Text>
            </Flex>
            <Icon as={MdWork} fontSize="3em" color="blue" />
          </HStack>
        </WrapItem>
        <WrapItem>
          <HStack bg="#fff" borderRadius="4%" py="6%" px="4%" w="200px">
            <Flex fontSize="lg" flexDirection="column" w="100%">
              <Text fontWeight="bold">7</Text>
              <Text>Applicants</Text>
            </Flex>
            <Icon as={FaUsers} fontSize="3em" color="blue" />
          </HStack>
        </WrapItem>
        <WrapItem>
          <HStack bg="#fff" borderRadius="4%" py="6%" px="4%" w="200px">
            <Flex fontSize="lg" flexDirection="column" w="100%">
              <Text fontWeight="bold">22.4%</Text>
              <Text>Apply Rate </Text>
            </Flex>
            <Icon as={BsFunnel} fontSize="3em" color="blue" />
          </HStack>
        </WrapItem>
        <WrapItem>
          <HStack bg="#fff" borderRadius="4%" py="6%" px="4%" w="200px">
            <Flex fontSize="lg" flexDirection="column" w="100%">
              <Text fontWeight="bold">1</Text>
              <Text>Job Views </Text>
            </Flex>
            <Icon as={BsEye} fontSize="3em" color="blue" />
          </HStack>
        </WrapItem>
      </Wrap>

      {/* <Flex>
        <Flex mt={[0, 0, 0, "-10%", "-10%"]}>
          <Box px={["3%", "3%", "3%", "auto", "auto"]}>
            <Flex
              bg={useColorModeValue("white", "gray.700")}
              py="8"
              px={{ base: "4", md: "10" }}
              shadow="base"
              rounded={{ sm: "lg" }}
              flexDir="column"
            >
              <VStack spacing={6}>
                <Image
                  src="/images/bg2.jpg"
                  alt="logo"
                  width="100px"
                  height="100px"
                />
                <Text fontSize="xl">About Employer</Text>
                <Text>We are good at what we do</Text>
                <Button type="submit" fontSize="md" w="100%">
                  Company Profile
                </Button>
              </VStack>
            </Flex>
          </Box>
        </Flex>
      </Flex> */}
    </Flex>
  );
};
