import {
  Box,
  Stack,
  Flex,
  Link,
  Icon,
  Button,
  Text,
  HStack,
  Divider,
  IconButton,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { InputField } from "./form/InputField";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import Dropzone, { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

import {
  MdLocationOn,
  MdWork,
  MdTimer,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import Moment from "react-moment";
import NextLink from "next/link";

interface ManageJobItemProps {
  id?: number;
  title?: string;
  companyName?: string;
  salary?: string;
  postDate?: string;
}

export const ManageJobItem: React.FC<ManageJobItemProps> = ({
  id,
  title,
  companyName,
  salary,
  postDate,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [modal, setModal] = useState("");

  return (
    <>
      <Box
        as="article"
        rounded="lg"
        bg="white"
        w="100%"
        p={4}
        transition=".2s ease-out"
        _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
      >
        <Stack direction={["column", "column", "column", "row", "row"]}>
          <Flex flexDirection="column" flex={2} gridGap="10px">
            <Flex alignItems="flex-start" justifyContent="space-between">
              <Box>
                <NextLink href={`/jobs/${id}`}>
                  <Link fontSize="xl" fontWeight="bold">
                    {title}{" "}
                  </Link>
                </NextLink>
                <Text fontSize="lg">{companyName} </Text>
              </Box>
            </Flex>
            <Flex
              flexDir={["column", "column", "column", "row", "row"]}
              gridGap="2px"
            >
              <Text fontWeight="semibold" color="green.400" px="2%">
                Active
              </Text>
              <Divider orientation="vertical" h="30px" mr="2%" />
              <Button
                leftIcon={<MdLocationOn color="blue.400" />}
                bg="blue.100"
                variant="solid"
                size="sm"
                color="blue.400"
              >
                Location
              </Button>

              <Button
                leftIcon={<MdWork color="green.400" />}
                bg="green.100"
                variant="solid"
                size="sm"
                color="green.400"
              >
                Full time
              </Button>

              <Button
                leftIcon={<MdTimer color="red.400" />}
                bg="red.100"
                variant="solid"
                size="sm"
                color="red.400"
              >
                <Moment format="MMM DD YYYY">{postDate}</Moment>
              </Button>
            </Flex>
          </Flex>
          <VStack justify="space-between" align="flex-end">
            <HStack align="flex-start">
              <Text fontWeight="semibold">0 Views</Text>
              <Divider orientation="vertical" h="30px" />
              <Link>
                <Text fontWeight="semibold">0 Applicants</Text>
              </Link>
            </HStack>
            <HStack align="flex-start">
              <IconButton
                aria-label="Edit"
                icon={<MdEdit fontSize="1.3em" color="green" />}
                bg="green.100"
                _hover={{ bg: "green.100" }}
                onClick={() => {
                  setModal("edit");
                  if (modal === "edit") {
                    onOpen();
                  }
                }}
              />
              <IconButton
                aria-label="Delete"
                icon={<MdDelete fontSize="1.3em" color="red" />}
                bg="red.100"
                _hover={{ bg: "red.100" }}
                onClick={() => {
                  setModal("delete");
                  if (modal === "delete") {
                    onOpen();
                  }
                }}
              />
            </HStack>
          </VStack>
        </Stack>
      </Box>
      {modal === "edit" ? (
        <Formik
          initialValues={{
            title: "",
            category: "",
            salary: "",
            location: "",
            expDate: "",
            description: "",
            imgUrl: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
              <ModalOverlay />
              <Box w="100%" overflow="auto">
                <ModalContent w="100%">
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Flex mb="2%" flexDirection="column">
                      <Text fontSize="1.5em" fontWeight="semibold" mb={2}>
                        Update A Job
                      </Text>
                      <Divider />
                    </Flex>

                    <Form>
                      <Flex fontWeight="bold">
                        <InputField
                          name="login"
                          placeholder=""
                          label=""
                          hidden
                        />
                      </Flex>

                      <VStack spacing={4} align="flex-start">
                        <InputField name="title" label="Title" />
                        <HStack w="100%">
                          <InputField name="category" label="Category" select />
                          <InputField
                            name="salary"
                            label="Salary"
                            type="text"
                          />
                        </HStack>
                        <HStack w="100%">
                          <InputField name="location" label="Location" />
                          <InputField
                            name="expDate"
                            label="Expiration Date"
                            type="date"
                          />
                        </HStack>
                        <InputField
                          name="description"
                          label="Description"
                          textarea
                        />

                        <Dropzone
                          onDrop={async ([file]) => {
                            const { data } = await uploadFile({
                              variables: { imgUrl: file },
                            });
                            setFieldValue("imgUrl", data.fileUpload.url);
                            setImg((img) => (img = data.fileUpload.url));
                            setName((name) => (name = file.name));

                            console.log(file);
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <Box
                              border="1px dashed gray"
                              h="100px"
                              w="100%"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} name="imgUrl" />
                              <VStack>
                                <Icon as={FiUploadCloud} fontSize="2em" />
                                <Text>Drag and drop or Click to Add Image</Text>
                              </VStack>
                              {/* {name ? (<Text>{name}</Text> ): null} */}
                            </Box>
                          )}
                        </Dropzone>

                        <Button
                          bg="#00b074"
                          color="white"
                          size="lg"
                          _hover={{ bg: "#00b074" }}
                          type="submit"
                          isLoading={isSubmitting}
                        >
                          Update Job
                        </Button>
                      </VStack>
                    </Form>
                  </ModalBody>
                </ModalContent>
              </Box>
            </Modal>
          )}
        </Formik>
      ) : (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <Box w="100%" overflow="auto">
            <ModalContent w="100%">
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Flex mb="2%" flexDirection="column">
                  <Text fontSize="1.5em" fontWeight="semibold" mb={2}>
                    Delete Job
                  </Text>
                  <Divider />
                </Flex>
                <HStack spacing="2%">
                  <Button bg="red.400" _hover={{ bg: "red.400" }}>
                    Delete
                  </Button>
                  <Button onClick={onClose}> Cancel</Button>
                </HStack>
              </ModalBody>
            </ModalContent>
          </Box>
        </Modal>
      )}
    </>
  );
};
