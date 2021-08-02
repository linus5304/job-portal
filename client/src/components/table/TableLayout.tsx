import React, { useState } from "react";
import { Input, Space, Table, Tag } from "antd";
import { TableHead } from "./TableHead";
import { columnData, columnHeader } from "../../utils/types";

interface TableLayoutProps {
  columns: columnHeader[];
  data: columnData[];
  listTitle: string;
  listNumber: number;
  options: any;
}

export const TableLayout: React.FC<TableLayoutProps> = ({
  columns,
  data,
  listTitle,
  listNumber,
  options,
}) => {
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

  const handleTableChange = (pagination) => { 
      setPagination({...pagination})
  }

  return (
    <>
      <TableHead
        options={options}
        listTitle={listTitle}
        listNumber={listNumber}
      />
      <Table columns={columns} dataSource={data} pagination={pagination} onChange={handleTableChange}/>
    </>
  );
};
