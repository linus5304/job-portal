import {
  Box,
  Button, Flex, Heading, HStack, Icon, Image, Link, Stack, Text, useColorModeValue, VStack, useToast
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaChevronLeft, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiCalendar, FiGlobe } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { layout } from "../../utils/types";
import { withApollo } from "../../utils/withApollo";
import { MainLayout } from "./../../components/layouts/MainLayout";
import { useApplyMutation, useGetJobByIdQuery } from "./../../generated/graphql";

interface JobProps {}

const Job: React.FC<JobProps> & layout = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const jobId = parseInt(id as string);

  const { data } = useGetJobByIdQuery({
    variables: {
      id: jobId,
    },
  });

  const toast = useToast()
  const [apply] = useApplyMutation()

  const handleApplication = async () => {
    const response = await apply({variables: {jobId}})
    if(!response.data?.apply){ 
      toast({
      title: "Application failed.",
      position:'top-right',
      description: "An error occured when applying",
      status: "error",
      duration: 4000,
      isClosable: true,
    })
    toast({
      title: "Application Successfull",
      position:'top-right',
      description: "You have successfully applied. Manage jobs in Myaccoount section",
      status: "success",
      duration: 6000,
      isClosable: false,
    })
    router.push(`/account/${data.getJobById.userId}`)

    }
  }
  return (
    <>
      <MainLayout>
        <Flex
          w="100%"
          flexDirection="column"
          bg="#470137"
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
              <Box>
                <Image src="/bg2.jpg" width="100px" height="100px" />
              </Box>
              <Flex flexDir="column" gridGap={3}>
                <Flex>
                  <Heading>{data?.getJobById.title}</Heading>
                </Flex>
                <HStack spacing="50px">
                  <Flex alignItems="center">
                    <Icon as={MdLocationOn} fontSize="lg" />
                    <Text>{data?.getJobById.location}</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={FiGlobe} fontSize="lg" />
                    <Link>{data?.getJobById.company.website}</Link>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={FiCalendar} fontSize="lg" />
                    <Text>{data?.getJobById.createdAt}</Text>
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
            <Heading as="h3"> JOB DESCRIPTION</Heading>
            <Text fontSize="lg" w="70%">
              {data?.getJobById.description}
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
                    src={data?.getJobById.company.logo}
                    alt="logo"
                    width="100px"
                    height="100px"
                  />
                  <Text fontSize="xl">
                    About {data?.getJobById.company.name} Employer
                  </Text>
                  <Text>{data?.getJobById.company.description}</Text>
                  <NextLink href={`/company/${data?.getJobById.company.id}`}>
                    <Button type="submit" fontSize="md" w="100%">
                      Company Profile
                    </Button>
                  </NextLink>
                </VStack>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Flex h="100%" py="2%" bg="#fff">
          <Flex
            w="60%"
            m="auto"
            justifyContent="space-between"
            flexDir={["column", "column", "column", "row", "row"]}
          >
            <Button size="lg" ml="-15%" onClick={handleApplication}>
              APPLY NOW
            </Button>

            <HStack spacing="24px">
              <Text>Share this job</Text>
              <Link>
                <Icon as={FaFacebook} fontSize="lg" />
              </Link>
              <Link>
                <Icon as={FaTwitter} fontSize="lg" />
              </Link>
              <Link>
                <Icon as={FaInstagram} fontSize="lg" />
              </Link>
              <Link>
                <Icon as={FaLinkedin} fontSize="lg" />
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </MainLayout>
    </>
  );
};

Job.value = "L2";
export default withApollo({ ssr: false })(Job);
