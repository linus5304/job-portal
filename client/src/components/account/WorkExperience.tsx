import {
  Button,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { useGetAllWorkQuery } from "../../generated/graphql";
import { InputField } from "../form/InputField";
import { useAddWorkMutation } from "./../../generated/graphql";
import { EduWorkItem } from "./EduWorktem";

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
      {data?.getAllWork.map((wk, idx) => (
        <VStack key={wk.id} w="100%" spacing="30px">

        
          <EduWorkItem
            variant="work"
            comp_name={wk.company_name}
            position={wk.position}
            field={wk.field}
            start={wk.start_date}
            end={wk.end_date}
            id={wk.id + idx}
            jsId={wk.jobSeekerId}
          />
          <Divider />
          </VStack>
      ))}

      <Formik
        initialValues={{
          jobSeekerId: jsId,
          company_name: "",
          position: "",
          field: "",
          start_date: "",
          end_date: "",
        }}
        onSubmit={async (values) => {
          const response = await addWk({
            variables: { data: values },
            update: (cache) => {
              cache.evict({fieldName: "getAllWork"})
            }
          });
          if (response.data.addWork) {
            console.log(values);
            values.jobSeekerId = jsId;
            values.company_name = "";
            values.position = "";
            values.field = "";
            values.start_date = "";
            values.end_date = "";
            onClose();
          }
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
                  <Button mr={3} isLoading={isSubmitting} type="submit">
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
