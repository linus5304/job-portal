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
  Divider
} from "@chakra-ui/react";
import { FiEdit, FiPlus } from "react-icons/fi";
import { Form, Formik } from "formik";
import {
  GetAllEducationDocument,
  useAddEducationMutation,
  useGetAllEducationQuery,
} from "../../generated/graphql";
import { EduWorkItem } from "./EduWorktem";

interface EducationProps {
  jsId: number;
}

export const Education: React.FC<EducationProps> = ({ jsId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addEducation] = useAddEducationMutation();
  const { data } = useGetAllEducationQuery({
    variables: { jsId },
  });

  console.log("id", jsId);
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

      {data?.getAllEducation.map((edu) => (
        <>
        <EduWorkItem
          variant="edu"
          school={edu.school}
          degree={edu.degree}
          field={edu.field}
          start={edu.start_date}
          end={edu.end_date}
          key={edu.id}
          id={edu.id}
          jsId={edu.jobSeekerId}
        />
        <Divider/>
        </>
      ))}

      <Formik
        initialValues={{
          jobSeekerId: jsId,
          school: "",
          degree: "",
          field: "",
          start_date: "",
          end_date: "",
        }}
        onSubmit={async (values) => {
          const response = await addEducation({
            variables: { data: values },
            update: (cache, {data}) => {
              
            }
          });
          if (response.data.addEducation) {
            console.log(values);
          }
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
                  <InputField name="jobSeekerId" type="hidden" value={jsId} />
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
                </ModalBody>
                <ModalFooter>
                  <Button mr={3} type="submit" isLoading={isSubmitting}>
                    Add
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
};
