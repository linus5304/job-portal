import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Applicant } from "../Applicant";

interface ColumnProps {
  tasks: any;
  id: string;
  title: string;
}

export const Column: React.FC<ColumnProps> = ({ tasks, id, title }) => {
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
              {tasks?.map((task: any, index: number) => (
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
                    >
                      <Applicant
                        last_name={task?.last_name}
                        first_name={task?.first_name}
                        bg={snapshot.isDragging ? "lightgray" : "white"}
                      />
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
