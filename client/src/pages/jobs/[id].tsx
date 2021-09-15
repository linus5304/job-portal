import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import NextLink from "next/link";
import { useRouter } from "next/router";

import Dropzone, { useDropzone } from "react-dropzone";
import {
  FaChevronLeft,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FiCalendar, FiGlobe, FiUploadCloud } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Moment from "react-moment";
import { InputField } from "../../components/form/InputField";
import { layout } from "../../utils/types";
import { withApollo } from "../../utils/withApollo";
import { MainLayout } from "./../../components/layouts/MainLayout";
import {
  useApplyMutation,
  useFileUploadMutation,
  useGetJobByIdQuery,
  useGetJsProfileQuery,
  useMeQuery,
} from "./../../generated/graphql";

interface JobProps {}

const Job: React.FC<JobProps> & layout = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const jobId = parseInt(id as string);

  const [uploadFile] = useFileUploadMutation();
  const [name, setName] = useState("");
  const { data: jsData, loading } = useGetJsProfileQuery();
  const toast = useToast();
  const [apply] = useApplyMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: meData } = useMeQuery();

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({ accept: ".doc,.docx,.pdf" });

  const { data, loading: cLoading } = useGetJobByIdQuery({
    variables: {
      id: jobId,
    },
    fetchPolicy: "cache-and-network",
  });

  if (!jsData && !meData && loading) {
    return <div>loading...</div>;
  }

  if (!data && cLoading) {
    <div>Loading...</div>;
  }


  return (
    <>
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
                    <Link>{data?.getJobById.user.companyProfile.website}</Link>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={FiCalendar} fontSize="lg" />
                    <Text>
                      <Moment format="MMM DD YYYY">
                        {data?.getJobById.createdDate}
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
          <Flex mt={[0, 0, 0, "-10%", "-10%"]} w="300px">
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
                    src={data?.getJobById.user.companyProfile.logo}
                    alt="logo"
                    width="100px"
                    height="100px"
                  />
                  <Box>
                    About @Company
                    <Text fontSize="xl" fontWeight="semibold">
                      {data?.getJobById.user.companyProfile.name}
                    </Text>
                  </Box>

                  <Text>
                    {data?.getJobById.user.companyProfile.description}
                    {setTimeout(() => {
                      console.log("company Id", data?.getJobById.user.id);
                    }, 5000)}
                  </Text>
                  <NextLink
                    href={`/company/${data?.getJobById.user.companyProfile.id}`}
                  >
                    <Button
                      type="submit"
                      fontSize="md"
                      w="100%"
                      bg="#00b074"
                      color="white"
                      size="lg"
                      _hover={{ bg: "green.500" }}
                    >
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
            {meData?.me && meData.me.user_type === "job seeker" ? (
              <>
                {/* {console.log("not ok", meData)} */}
                <Button
                  ml="-15%"
                  onClick={onOpen}
                  bg="#00b074"
                  color="white"
                  size="lg"
                  _hover={{ bg: "green.500" }}
                >
                  APPLY NOW
                </Button>
              </>
            ) : (
              <>
                {/* {console.log("ok", meData)} */}
                <Button
                  ml="-15%"
                  onClick={onOpen}
                  bg="#00b074"
                  color="white"
                  size="lg"
                  _hover={{ bg: "green.500" }}
                  disabled={true}
                >
                  APPLY NOW
                </Button>
              </>
            )}

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

      {data ? (
        <Formik
          initialValues={{
            jobId,
            email: jsData?.getJSProfile.email ? jsData?.getJSProfile.email : "",
            phone: jsData?.getJSProfile.phone ? jsData?.getJSProfile.phone : "",
            cv: "",
            cover_letter: "",
            companyId: data ? data.getJobById?.user?.id : null,
          }}
          onSubmit={async (values) => {
            const response = await apply({
              variables: { input: values },
            });
            console.log("application respose", response.data.apply);

            if (!response.data?.apply) {
              toast({
                title: "Application failed.",
                position: "top-right",
                description: "An error occured when applying",
                status: "error",
                duration: 4000,
                isClosable: true,
              });
            }
            toast({
              title: "Application Successfull",
              position: "top-right",
              description:
                "You have successfully applied. Manage jobs in Myaccoount section",
              status: "success",
              duration: 6000,
              isClosable: false,
            });
            onClose();
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <Form>
                <ModalContent>
                  <ModalHeader>Apply for Job</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <VStack>
                      <InputField name="jobId" label="" hidden />
                      <InputField name="companyId" label="" hidden />
                      <InputField name="email" label="Email" />
                      <InputField name="phone" label="Phone" />
                      <InputField
                        name="cover_letter"
                        label="Cover Letter"
                        textarea
                      />
                      <Dropzone
                        onDrop={async ([file]) => {
                          const { data } = await uploadFile({
                            variables: { imgUrl: file },
                          });
                          setFieldValue("cv", data.fileUpload.url);
                          // setImg((img) => (img = data.fileUpload.url));
                          setName((name) => (name = file.name));
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <Box
                            border="1px dashed gray"
                            h="100px"
                            w="100%"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} name="cv" />
                            <VStack>
                              <Icon as={FiUploadCloud} fontSize="2em" />
                              <Text>Drag and drop or Click to Add your CV</Text>
                            </VStack>
                            {name ? (
                              <Text fontSize="lg" fontWeight="semibold">
                                {name}
                              </Text>
                            ) : null}
                          </Box>
                        )}
                      </Dropzone>
                    </VStack>
                  </ModalBody>

                  <ModalFooter>
                    <Button mr={3} isLoading={isSubmitting} type="submit">
                      Apply
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Form>
            </Modal>
          )}
        </Formik>
      ) : null}
    </>
  );
};

Job.value = "L2";
export default withApollo({ ssr: false })(Job);
