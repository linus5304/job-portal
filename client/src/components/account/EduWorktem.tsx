import {
  Flex,
  VStack,
  IconButton,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdEdit, MdDelete } from "react-icons/md";
import { InputField } from "../form/InputField";
import {
  useUpdateEducationMutation,
  useUpdateWorkMutation,
  useDeleteEducationMutation,
  useDeleteWorkMutation,
} from "./../../generated/graphql";

interface EduWorkItemProps {
  school?: string;
  degree?: string;
  field?: string;
  start?: string;
  end?: string;
  comp_name?: string;
  variant?: string;
  position?: string;
  id?: number;
  jsId?: number;
}

export const EduWorkItem: React.FC<EduWorkItemProps> = ({
  comp_name,
  position,
  degree,
  end,
  start,
  field,
  school,
  variant,
  id,
  jsId,
}) => {
  const [updateEdu] = useUpdateEducationMutation();
  const [updateWk] = useUpdateWorkMutation();
  const [deleteEdu] = useDeleteEducationMutation();
  const [deleteWk] = useDeleteWorkMutation();
  if (variant === "edu") {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Flex justifyContent="space-between" w="100%">
          <VStack align="flex-start" spacing="2px">
            <Text fontWeight="bold">{school}</Text>
            <Flex gridGap={2}>
              <Text>{degree}</Text>
              <Text>{field}</Text>
            </Flex>
            <Text>
              {start}-{end}
            </Text>
          </VStack>
          <VStack>
            <IconButton
              aria-label="Edit"
              icon={<MdEdit fontSize="1.3em" color="green" />}
              bg="green.100"
              _hover={{ bg: "green.100" }}
              onClick={onOpen}
            />
            <IconButton
              aria-label="Edit"
              icon={<MdDelete fontSize="1.3em" color="red" />}
              bg="red.100"
              _hover={{ bg: "red.100" }}
              onClick={() =>
                deleteEdu({
                  variables: { id },
                  update: (cache) => cache.evict({ id: "Education:" + id }),
                })
              }
            />
          </VStack>
        </Flex>
        <Formik
          initialValues={{
            jobSeekerId: jsId,
            school: school,
            degree: degree,
            field: field,
            start_date: start,
            end_date: end,
          }}
          onSubmit={async (values) => {
            const response = await updateEdu({
              variables: { data: values, id },
              update: (cache) => {
                cache.evict({fieldName: "getAllEducation"})
              }
            });
            if (response.data.updateEducation) {
              console.log(values);
            }
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <Form>
                <ModalContent>
                  <ModalHeader>Edit Education</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <InputField name="jobSeekerId" type="hidden" />
                    <InputField name="school" label="School" />
                    <InputField name="degree" label="Degree" />
                    <InputField name="field" label="Field of Study" />
                    <Flex>
                      <InputField
                        name="start_date"
                        label="start Date"
                        type="date"
                      />
                      <InputField
                        name="end_date"
                        label="End Date"
                        type="date"
                      />
                    </Flex>
                  </ModalBody>
                  <ModalFooter>
                    <Button mr={3} type="submit" isLoading={isSubmitting}>
                      Update
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Form>
            </Modal>
          )}
        </Formik>
      </>
    );
  } else if (variant === "work") {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Flex justifyContent="space-between" w="100%">
          <VStack align="flex-start" spacing="2px">
            <Text fontWeight="bold">{comp_name}</Text>
            <Flex gridGap={2}>
              <Text>{position}</Text>
              <Text>{field}</Text>
            </Flex>
            <Text>
              {start}-{end}
            </Text>
          </VStack>
          <VStack>
            <IconButton
              aria-label="Edit"
              icon={<MdEdit fontSize="1.3em" color="green" />}
              bg="green.100"
              _hover={{ bg: "green.100" }}
              onClick={onOpen}
            />
            <IconButton
              aria-label="Edit"
              icon={<MdDelete fontSize="1.3em" color="red" />}
              bg="red.100"
              _hover={{ bg: "red.100" }}
              onClick={() =>
                deleteWk({
                  variables: { id },
                  update: (cache) => {
                    cache.evict({ id: "Work:" + id });
                  },
                })
              }
            />
          </VStack>
        </Flex>

        <Formik
          initialValues={{
            jobSeekerId: jsId,
            comp_name: comp_name,
            position: position,
            field: field,
            start_date: start,
            end_date: end,
          }}
          onSubmit={async (values) => {
            const response = await updateWk({
              variables: { data: values, id },
            });
            if (response.data.updateWork) {
              console.log(values);
            }
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <Form>
                <ModalContent>
                  <ModalHeader>Add Education</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <InputField name="company_name" label="Company Name" />
                    <InputField name="position" label="Title" />
                    <InputField name="field" label="Business Field" />
                    <Flex>
                      <InputField
                        name="start_date"
                        label="start Date"
                        type="date"
                      />
                      <InputField
                        name="end_date"
                        label="End Date"
                        type="date"
                      />
                    </Flex>
                  </ModalBody>
                  <ModalFooter>
                    <Button mr={3} type="submit" isLoading={isSubmitting}>
                      Update
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Form>
            </Modal>
          )}
        </Formik>
      </>
    );
  }
};
