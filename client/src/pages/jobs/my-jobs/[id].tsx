import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Column } from "../../../components/dnd/Column";
import { DashboardLayout } from "../../../components/layouts/DashboardLayout";
import {
  JobSeeker,
  useGetJobApplicantsQuery,
} from "../../../generated/graphql";
import { initialData, MyData } from "../../../utils/sample-data";
import { withApollo } from "../../../utils/withApollo";
import Cookie from "js-cookie";
import { parseCookie } from "../../../utils/functions";
import { NextPageContext } from "next";

interface ApplicantsProps {
  jId: number;
  first_name: string;
  last_name: string;
  newInitialState: MyData;
}

const Applicants: React.FC<ApplicantsProps> = ({
  jId,
  first_name,
  last_name,
  newInitialState,
}) => {
  // const [state, setState] = useState(() => )

  const router = useRouter();
  const { id } = router.query;
  const jobId = parseInt(id as string);
  // const lData = JSON.parse(localStorage.getItem('setState'))
  let lData;
  if (typeof localStorage !== "undefined") {
    const getSavedData = localStorage.getItem("newState");
    lData = JSON.parse(getSavedData);
  } else {
    lData = initialData;
  }
  const [state, setState] = useState(initialData);

  const [applicants, setApplicants] = useState({});

  console.log('new Initial state',newInitialState)

  // useEffect(() => {
  //   const getSavedData = localStorage.getItem("newState");
  //   const savedData = JSON.parse(getSavedData);
  //   setState((prev) => prev = savedData);
  // }, []);
  useEffect(() => {
    Cookie.set("newState", JSON.stringify(state));
    console.log("json data", JSON.parse(Cookie.get("newState")));
  }, [state]);

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
      ) as JobSeeker;
      const items = Object.keys(newApplicants);
      let newItems = { ...initialData, applicants: newApplicants };
      let newItem = { ...newItems.columns["column-1"] };
      newItem.applicantIds = items;
      newItems.columns["column-1"] = newItem;
      console.log("new item", newItem.applicantIds);
      setState(newItems);
      setApplicants(newApplicants);
      console.log("applicants", newApplicants);
    },
  });
  // let i = 0
  if (!data && loading) return <div>Loading...</div>;

  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId, type } = result;
    console.log("resssssulll", result);

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

      console.log("applicants Ids", newTasksIds);
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
          const tasks = column.applicantIds.map(
            (id: number) => applicants[id]
          ) as JobSeeker[];

          console.log("task", tasks);

          return (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={tasks}
              jId={jId}
            />
          );
        })}
      </DragDropContext>
    </DashboardLayout>
  );
  
};


export default withApollo({ ssr: true })(Applicants)


