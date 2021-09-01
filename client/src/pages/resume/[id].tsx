import React from "react";
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
  Divider,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  FaChevronLeft,
  FaFacebook,
  FaGraduationCap,
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
  useGetAllEducationQuery,
  useGetJobByIdQuery,
  useGetJsProfileByIdQuery,
  useGetJsProfileQuery,
} from "./../../generated/graphql";
import Moment from "react-moment";

interface ResumeProps {
  position?: string;
  description?: string;
  imgUrl?: string;
  location?: string;
  name?: string;
  id?: number;
  date?: any;
  degree?: string;
}

export const Resume: React.FC<ResumeProps> = ({
  position,
  description,
  imgUrl,
  name,
  location,
  // id,
  date,
  degree,
}) => {
  const router = useRouter();
  const { id } = router.query;
  const jsId = parseInt(id as string);
  const { data, loading, error } = useGetJsProfileByIdQuery({
    variables: { id: jsId },
  });

  if (!data && loading) return <div>Loading...</div>;
  if (!data && !loading) return <div>{`error ${error.message}`}</div>;

  return (
    <MainLayout>
      <Flex w="100%" flexDirection="column" bg="#00b074" m={0} h="100%" py="4%">
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
                <Heading>
                  {data?.getJSProfileById.first_name}{" "}
                  {data?.getJSProfileById.last_name}
                </Heading>
              </Flex>
              <HStack spacing="50px">
                <Flex alignItems="center">
                  <Icon as={MdWork} fontSize="lg" />
                  <Text>{data?.getJSProfileById.title}</Text>
                </Flex>
                {/* <Flex alignItems="center">
                  <Icon as={MdLocationOn} fontSize="lg" />
                  <Link>{data?.getJSProfileById.lo}</Link>
                </Flex> */}
                <Flex alignItems="center">
                  <Icon as={FiCalendar} fontSize="lg" />
                  <Text>
                    <Moment format="MMM DD YYYY">
                      {data?.getJSProfileById.updatedAt}
                    </Moment>
                  </Text>
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
        alignItems={["center", "center", "center", "flex-start", "flex-start"]}
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
          "row",
        ]}
      >
        <VStack w="60%" spacing="30px" align="flex-start">
          <Text fontSize="2xl" fontWeight="bold">
            {" "}
            PERSONAL SUMMARY
          </Text>
          <Text fontSize="lg" w="70%">
            {data?.getJSProfileById.about_me}
          </Text>
          <VStack w="100%" align="flex-start">
            <Text fontSize="2xl" fontWeight="bold">
              EDUCATION
            </Text>

            {/* <EducationDesc jsId={jsId} /> */}
            <VStack align="flex-start">
              {data?.getJSProfileById.education.map((js) => (
                <Box key={js.id}>
                  <Text fontSize="xl" fontWeight="semibold">
                    {js.degree}
                  </Text>
                  <HStack>
                    <Flex alignItems="center">
                      <Icon as={FiCalendar} fontSize="lg" />
                      <Text>
                        {js.start_date} - {js.end_date}
                      </Text>
                    </Flex>

                    <Flex alignItems="center">
                      <Icon as={MdWork} fontSize="lg" />
                      <Text>{js.school}</Text>
                    </Flex>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </VStack>
          <VStack w="100%" align="flex-start">
            <Text fontSize="2xl" fontWeight="bold">
              WORK EXPERIENCE
            </Text>

            {/* <WorkDesc jsId={jsId} /> */}
            <VStack align="flex-start">
              <div>{data?.getJSProfileById?.work_experience?.length}</div>
              {data?.getJSProfileById?.work_experience?.map((wk) => {
                <Box key={wk.id}>
                  <Text fontSize="xl" fontWeight="semibold">
                    {wk.field}
                  </Text>
                  <HStack>
                    <Flex alignItems="center">
                      <Icon as={FiCalendar} fontSize="lg" />
                      <Text>
                        {wk.start_date} - {wk.end_date}
                      </Text>
                    </Flex>

                    <Flex alignItems="center">
                      <Icon as={FaGraduationCap} fontSize="lg" />
                      <Text>{wk.company_name}</Text>
                    </Flex>
                  </HStack>
                </Box>;
              })}
            </VStack>
          </VStack>
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
                <Text fontSize="xl">About Employer</Text>
                <Text></Text>
              </VStack>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default withApollo({ ssr: false })(Resume);
