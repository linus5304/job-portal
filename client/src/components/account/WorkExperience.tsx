import React from "react";
import { InputField } from "../form/InputField";
import {
  Button,
  VStack,
  IconButton,
  useDisclosure,
  Flex,
  Text,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FiEdit, FiPlus } from "react-icons/fi";
import { Form, Formik } from "formik";

interface WorkExperienceProps {}

export const WorkExperience: React.FC<WorkExperienceProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack justify="space-between" w="100%">
        <Text fontSize="lg" fontWeight="semibold">
          Work Experience
        </Text>
        <Flex align="flex-end">
          <IconButton
            variant="outline"
            aria-label="Call Segun"
            size="md"
            icon={<FiPlus fontWeight="bold" />}
            onClick={onOpen}
          />
        </Flex>
      </HStack>

      <Flex justifyContent="space-between" w="100%">
        <VStack align="flex-start" spacing="2px">
          <Text fontWeight="bold">Yahoo Inc.</Text>
          <Flex gridGap={2}>
            <Text>Senior Frontend Developer </Text>
            <Text></Text>
          </Flex>
          <Text>2020-2023</Text>
        </VStack>
        <IconButton
          variant="outline"
          aria-label="Call Segun"
          size="md"
          icon={<FiEdit fontWeight="bold" />}
        />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Experience</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={{ name: "", email: "" }}
              onSubmit={(values) => {}}
            >
              {() => (
                <Form>
                  <InputField name="school" label="School" />
                  <InputField name="degree" label="Degree" />
                  <InputField name="field" label="Field of Study" />
                  <Flex>
                    <InputField
                      name="start_date"
                      label="start Date"
                      type="date"
                    />
                    <InputField name="end_date" label="End Date" type="date" />
                  </Flex>
                </Form>
              )}
            </Formik>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
