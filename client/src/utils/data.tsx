import { Tag, Space } from "antd";
import React from "react";
import { columnData, columnHeader } from "./types";




export const options = [
  {
    text: "frontEnd Engineer",
    value: "frontend",
  },
  {
    text: "backend Engineer",
    value: "backend",
  },
  {
    text: "cloud Engineer",
    value: "cloud",
  },
];

export const columns: columnHeader[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Applied as",
    dataIndex: "appliedAs",
    key: "appliedAs",
    filters: options,
    onFilter: (value, record) => record.appliedAs.indexOf(value) === 0,
  },
  {
    title: "Applied on",
    dataIndex: "appliedOn",
    key: "appliedOn",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: any[]) => {
      return (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      );
    },
    
  },
  {
    title: "Action",
    key: "action",
    render: (input, record) => {
      return (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      );
    },
  },
];

export const data: columnData[] = [
  {
    key: 1,
    name: "John Brown",
    appliedAs: "frontEnd Engineer",
    appliedOn: "12-09-2021",
    tags: ['nice', 'developer'],
  },
  {
    key: 2,
    name: "John Brown",
    appliedAs: "backend Engineer",
    appliedOn: "12-09-2021",
    tags: ['nice', 'developer'],
  },
  {
    key: 3,
    name: "John Brown",
    appliedAs: "cloud Engineer",
    appliedOn: "12-09-2021",
    tags: ['nice', 'developer'],
  },
];
