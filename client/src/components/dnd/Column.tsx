import {
  Box,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Application, JobSeeker } from "../../generated/graphql";
import { Applicant } from "../Applicant";
import { ApplicantResume } from "../ApplicantResume";

interface ColumnProps {
  tasks: JobSeeker[];
  id: string;
  title: string;
  jId: number;
}

export const Column: React.FC<ColumnProps> = ({ tasks, id, title, jId }) => {
  // get a single value from array based on a condition
  // 1. loop through the array with a filter and store the result in a temp variable
  // 2. check if $temp has any data
  // 3. if temp has data, return the date of $temp[0]
  // 4. else return null
  const getApplicationDate = (a: Application[]) => {
    const temp = a.filter((o) => o.jobId === jId);
    if (temp.length > 0) {
      return temp[0].appication_date;
    } else {
      return null;
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w="100%"
        align="flex-start"
        transition={"background-color 0.3s ease"}
        m="2%"
        border="1px solid gray"
        rounded="md"
      >
        <Heading as="h4" size="md" p="2">
          {title}
        </Heading>
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <VStack
              p="4%"
              {...provided.droppableProps}
              ref={provided.innerRef}
              bgColor={snapshot.isDraggingOver ? "#f3f3f3" : "lightgray"}
              h="600px"
            >

              {tasks?.map((task: JobSeeker, index: number) => (
                <Draggable
                  draggableId={task?.id + ""}
                  index={index}
                  key={task?.id}
                >
                  {(provided, snapshot) => (
                    <Box
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      w="100%"
                      onClick={onOpen}
                    >
                      <Applicant
                        last_name={task?.last_name}
                        date={getApplicationDate(task.user.application)}
                        bg={snapshot.isDragging ? "lightgray" : "white"}
                        image={task?.profile_pic}
                      />
                      <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl" >
                        <ModalOverlay />
                        <Box w="100%" overflow="auto">
                          <ModalContent w="100%">
                            <ModalBody p={0} rounded="5%"> 
                              <ApplicantResume id={task.id} />
                              
                            </ModalBody>
                          </ModalContent>
                        </Box>
                      </Modal>
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </VStack>
          )}
        </Droppable>
      </Box>
    </>
  );
};
