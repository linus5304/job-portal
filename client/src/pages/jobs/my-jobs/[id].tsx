import { HStack, VStack, Heading, Box, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableLocation,
  DropResult,
} from "react-beautiful-dnd";
import { Applicant } from "../../../components/Applicant";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import { withApollo } from "../../../utils/withApollo";
import { useRouter } from "next/router";
import { useGetJobApplicantsQuery } from "../../../generated/graphql";
import { Column } from "../../../components/dnd/Column";
import { initialData } from "../../../utils/sample-data";

interface ApplicantsProps {
  jId: number;
  first_name: string;
  last_name: string;
}
interface Item {
  id: string;
  content: string;
}

interface IMoveResult {
  droppable: Item[];
  droppable2: Item[];
}

const getItems = (count: number, offset: number = 0): Item[] => {
  return Array.from({ length: count }, (v, k) => k).map((k) => ({
    content: `item ${k + offset}`,
    id: `item-${k + offset}`,
  }));
};

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result: any[] = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);
  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const Applicants: React.FC<ApplicantsProps> = ({
  jId,
  first_name,
  last_name,
}) => {
  // const [state, setState] = useState(() => )
  const router = useRouter();
  const { id } = router.query;
  const jobId = parseInt(id as string);
  const [state2, setState2] = useState(initialData);
  const [applicants, setApplicants] = useState([]);
  const { data, loading } = useGetJobApplicantsQuery({
    variables: { id: jobId },
    onCompleted: (data) => {
      if (!data && loading) {
        setApplicants([]);
      }
      const items = data?.getJobApplicants.map((x) => x.id);
      const applicants = data?.getJobApplicants.map((x) => x);
      let newItems = { ...initialData };
      let newItem = { ...newItems.columns["column-1"] };
      newItem.applicants = items;
      newItems.columns["column-1"] = newItem;
      console.log("new item", newItem.applicants);
      // setState2(newItems);
      setApplicants(applicants);
    },
  });
  // let i = 0
  if (!data && loading) return <div>Loading...</div>;

  function onDragEnd(result: DropResult) {
    const { draggableId, source, destination } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state2.columns[source.droppableId];
    const finish = state2.columns[destination.droppableId];

    console.log(start, finish);

    if (start === finish) {
      const newApplicants: any[] = Array.from(start.applicants);
      newApplicants.splice(source.index, 1);
      newApplicants.splice(destination.index, 0, parseInt(draggableId));

      console.log(source.index, destination.index)
      const newColumn = {
        ...start,
        applicants: newApplicants,
      };
      console.log("new column", newColumn);
      console.log("start", newColumn);

      const newState = {
      ...state2,
        columns: {
          ...state2.columns,
          [newColumn.id]: newColumn,
        },
      };

      console.log('1st state 2',state2.columns["column-1"])
      console.log('new state 2',newState.columns["column-1"])
      setState2(newState);
      return;
    }
  }

  return (
    <DashboardLayout>
      <DragDropContext onDragEnd={onDragEnd}>
        {state2.columnOrder.map((columnId, index) => {
          // console.log("index", index);

          const column = state2.columns[columnId];
          const newApplicants = column.applicants.map(
            (_, i: number) => applicants[i]
          );

          // console.log(newApplicants)

          return (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              applicants={newApplicants}
            />
          );
        })}
      </DragDropContext>
    </DashboardLayout>
  );
};

export default withApollo({ ssr: false })(Applicants);
