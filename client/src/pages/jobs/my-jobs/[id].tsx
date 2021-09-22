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
import { exampleData, initialData } from "../../../utils/sample-data";

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
  const [state, setState] = useState(initialData);
  const [applicants, setApplicants] = useState({});
  const { data, loading } = useGetJobApplicantsQuery({
    variables: { id: jobId },
    onCompleted: (data) => {
      if (!data && loading) {
        setApplicants([]);
      }
      // const items = data?.getJobApplicants.map((x) => x.id);
      const applicants = data?.getJobApplicants.map((x) => x);
      // const newApplicants = Object.assign({}, applicants)


      // converting and array into object using the reduce method
      const newApplicants = applicants.reduce(
        (a, v) => ({ ...a, [`applicant-${v.id}`]: v }),
        {}
      );
      const items = Object.keys(newApplicants);
      let newItems = { ...initialData, applicants: newApplicants };
      let newItem = { ...newItems.columns["column-1"] };
      newItem.applicantIds = items;
      newItems.columns["column-1"] = newItem;
      console.log("new item", newItem.applicantIds);
      setState(newItems);
      setApplicants(newApplicants);
      console.log("applicants", items);
    },
  });
  // let i = 0
  if (!data && loading) return <div>Loading...</div>;

  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      };

      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    console.log(start, finish);

    if (start === finish) {
      const newTasksIds = Array.from(start.applicantIds);
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, `applicant-${draggableId}`);

      console.log('applicants Ids', newTasksIds)
      const newColumn = {
        ...start,
        applicantIds: newTasksIds,
      };

      console.log("new Column", newColumn);

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      // setState(newState);
      // console.log("1st state 2", state.columns["column-1"]);
      // console.log("new state 2", state.columns["column-1"]);
      setState(newState);

      console.log("state", state);
      return;
    }

    // moving from one list to another
    const startTaskIds = Array.from(start.applicantIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      applicantIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.applicantIds);
    finishTaskIds.splice(destination.index, 0, `applicant-${draggableId}`);
    const newFinish = {
      ...finish,
      applicantIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
    return;
  }

  return (
    <DashboardLayout>
      <DragDropContext onDragEnd={onDragEnd}>
        {state.columnOrder.map((columnId, index) => {
          // console.log("index", index);

          const column = state.columns[columnId];
          const tasks = column.applicantIds.map((id: number) => applicants[id]);

          console.log("task", tasks);

          return (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={tasks}
            />
          );
        })}
      </DragDropContext>
    </DashboardLayout>
  );
};

export default withApollo({ ssr: false })(Applicants);
