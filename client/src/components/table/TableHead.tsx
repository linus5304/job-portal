import { Row, Col, Select } from "antd";
import React from "react";

interface TableHeadProps {
  listTitle: string;
  listNumber: number;
  options: option[];
}

export type option = {
  name: string;
  key: string;
};

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export const TableHead: React.FC<TableHeadProps> = ({
  listTitle,
  listNumber,
  options,
}) => {
  return (
    <Row justify="space-between" style={{ margin: "5% 0 5px 0" }}>
      <Col span={4}>
        <h2>
          {listTitle} List ({listNumber})
        </h2>
      </Col>
      <Col span={8} style={{ display: "flex", justifyContent: "flex-end", alignItems:'center' }}>
        <div style={{marginRight: 4}}>Filter by Job: </div>
        <Select
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          allowClear
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
        >
          {options.map((opt) => {
            return (
              <Option value={opt.value} key={opt.value}>
                {opt.text}
              </Option>
            );
          })}
        </Select>
      </Col>
    </Row>
  );
};
