import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  useToast,
  Divider
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  FaChevronLeft,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FiCalendar, FiGlobe } from "react-icons/fi";
import { MdLocationOn, MdWork } from "react-icons/md";
import { InputField } from "../../components/form/InputField";
import { EducationDesc } from "../../components/EducationDesc";
import { WorkDesc } from "../../components/WorkDesc";
import { layout } from "../../utils/types";
import { withApollo } from "../../utils/withApollo";
import { MainLayout } from "./../../components/layouts/MainLayout";
import {
  useApplyMutation,
  useGetJobByIdQuery,
} from "./../../generated/graphql";
import Moment  from 'react-moment';


interface ResumeProps{
position?:string
    description?:string
    imgUrl?:string
    location?:string
    name?:string
    id?:number
    date?:any
    degree?:string

}


export const Resume: React.FC<ResumeProps> = ({position,
    description,
    imgUrl,
    name,
    location, id, date, degree}) => {
        return (
             <MainLayout>
        <Flex
          w="100%"
          flexDirection="column"
          bg="#00b074"
          m={0}
          h="100%"
          py="4%"
        >
          <VStack my="auto" ml="10%" align="flex-start">
            <Flex align="flex-start">
              <Button
                size="sm"
                leftIcon={<FaChevronLeft />}
                onClick={() => router.back()}
              >
                Back
              </Button>
            </Flex>
            <Stack
              direction={["column", "column", "column", "row", "row"]}
              color="#fff"
            >
              
              <Flex flexDir="column" gridGap={3}>
                <Flex>
                  <Heading>Linus Bayere</Heading>
                </Flex>
                <HStack spacing="50px">
                  <Flex alignItems="center">
                    <Icon as={MdWork} fontSize="lg" />
                    <Text>{position}FronEnd Developer</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={MdLocationOn} fontSize="lg" />
                    <Link>{location}</Link>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={FiCalendar} fontSize="lg" />
                    <Text><Moment format="MMM DD YYYY">date</Moment></Text>
                  </Flex>
                </HStack>
              </Flex>
            </Stack>
          </VStack>
        </Flex>
        <Flex
          h="100%"
          py="4%"
          ml="10%"
          alignItems={[
            "center",
            "center",
            "center",
            "flex-start",
            "flex-start",
          ]}
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
            "row",
          ]}
        >
          <VStack w="60%" spacing="30px" align="flex-start">
            <Text fontSize="2xl" fontWeight="bold"> PERSONAL SUMMARY</Text>
            <Text fontSize="lg" w="70%">
              {description}
            </Text>
            <VStack w="100%" align="flex-start" >
                        <Text fontSize="2xl" fontWeight="bold">EDUCATION</Text>

                <EducationDesc/>
                <Divider bg="#000"/>
                <EducationDesc/>
            </VStack>
            <VStack w="100%" align="flex-start" >
                        <Text fontSize="2xl" fontWeight="bold">WORK EXPERIENCE</Text>

                <WorkDesc/>
                <Divider bg="#000"/>
                <WorkDesc/>
            </VStack>
            <Text fontSize="2xl" fontWeight="semibold">Skills</Text>
            <Text fontSize="lg" w="70%">
              {description}
            </Text>
          </VStack>
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
                    src="/bg2.jpg"
                    alt="logo"
                    width="100px"
                    height="100px"
                    rounded="full"
                  />
                  <Text fontSize="xl">
                    About  Employer
                  </Text>
                  <Text></Text>
                  
                </VStack>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        
      </MainLayout>
        );
};

export default withApollo({ssr: false}) (Resume);