import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Applicant } from "../Applicant";

interface ColumnProps {
  applicants:any;
  id: string;
  title: string;
}

export const Column: React.FC<ColumnProps> = ({ applicants, id, title }) => {
  return (
    <>
      <Droppable droppableId={id} >
        {(provided, snapshot) => (
          <Box
            w="100%"
            align="flex-start"
            {...provided.droppableProps}
            ref={provided.innerRef}
            key={id}
          >
            <Heading as="h4" size="md">
              {title}
            </Heading>
            <VStack>
              {applicants?.map((app: any, idx:any) => (
                <Draggable draggableId={app.id + ''} index={idx} key={app.id}>
                  {(provided) => (
                    <Box
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      w="100%"
                      
                    >
                      <Applicant
                        last_name={app.last_name}
                        first_name={app.first_name}
                      />
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </VStack>
          </Box>
        )}
      </Droppable>
    </>
  );
};
