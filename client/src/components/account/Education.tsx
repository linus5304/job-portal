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

interface EducationProps {}

export const Education: React.FC<EducationProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack justify="space-between" w="100%">
        <Text fontSize="lg" fontWeight="semibold">
          Education
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
          <Text fontWeight="bold">IAI Cameroon</Text>
          <Flex gridGap={2}>
            <Text>Bachelor, </Text>
            <Text>Computer Science</Text>
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
          <ModalHeader>Add Education</ModalHeader>
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
