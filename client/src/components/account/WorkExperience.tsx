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
import { EduWorkItem } from "./EduWorktem";
import { useGetAllWorkQuery } from "../../generated/graphql";
import { useAddWorkMutation } from "./../../generated/graphql";

interface WorkExperienceProps {
  jsId: number;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ jsId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addWk] = useAddWorkMutation();
  const { data } = useGetAllWorkQuery({
    variables: { jsId },
  });

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
      {data?.getAllWork.map((wk) => (
        <EduWorkItem
          variant="work"
          comp_name={wk.company_name}
          position={wk.position}
          field={wk.field}
          start={wk.start_date}
          end={wk.end_date}
          key={wk.id}
          id={wk.id}
          jsId={wk.jobSeekerId}
        />
      ))}

      <Formik
        initialValues={{
          jobSeekerId: jsId,
          comp_name: "",
          position: "",
          field: "",
          start_date: "",
          end_date: "",
        }}
        onSubmit={async (values) => {
          const response = await addWk({
            variables: { data: values },
          });
          if (response.data.addWork) {
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
                <ModalHeader>Add Experience</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <InputField name="jobSeekerId" type="hidden" />
                  <InputField name="company_name" label="Company Name" />
                  <InputField name="position" label="Title" />
                  <InputField name="field" label="Business Field" />
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
                  <Button mr={3} isLoading={isSubmitting}>
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
