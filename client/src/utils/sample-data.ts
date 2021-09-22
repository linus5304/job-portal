/** Dummy user data. */
export const user_type = [
  { id: 1, name: "Job seeker" },
  { id: 2, name: "Company" },
];

export const job_category = [
  { id: 1, name: "Web development" },
  { id: 2, name: "Nanny" },
  { id: 3, name: "Agent de maîtrise" },
  { id: 4, name: "Agriculture" },
  { id: 5, name: "Accoounting" },
  { id: 6, name: "Academic" },
  { id: 7, name: "Business" },
  { id: 8, name: "Forestry" },
  { id: 9, name: "Banking and Finance " },
  { id: 10, name: "Translation" },
  { id: 11, name: "Consultant" },
];
export const location = [
  { id: 1, name: "Yaounde" },
  { id: 2, name: "Douala" },
  { id: 3, name: "kumba" },
  { id: 4, name: "Bafoussam" },
  { id: 5, name: "Bamenda" },
  { id: 6, name: "Buea" },
  { id: 7, name: "Kribi" },
];

// export type ColumnType = {
//   id: string;
//   title: string;
//   applicants: any[];
// };

// export const columns: ColumnType[] = [
//   { id: "column_1", title: "New Applicants", applicants: [] },
//   { id: "column_2", title: "Interview", applicants: [] },
//   { id: "column_3", title: "Rejected", applicants: [] },
// ];

export const initialData = {
  applicants: {},
  columns: {
    "column-1": {
      id: "column-1",
      title: "New Application",
      applicantIds: [],
    },
    "column-2": {
      id: "column-2",
      title: "Interview",
      applicantIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Rejected",
      applicantIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export const exampleData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
  },

  columnOrder: ["column-1", "column-2"],
};
