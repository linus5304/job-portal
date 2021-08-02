export type columnHeader = {
  title: string;
  dataIndex?: string;
  key: string;
  filters?: any
  render?: (text?: any, record?: any, tags?:any) => any;
  onFilter?:(value?:any, record?:any) => any
};

export type columnData = {
  key: number;
  name: string;
  appliedAs?: string;
  appliedOn?: string;
  jobType?: string;
  createdOn?: string;
  applicants?: number;
  tags?: any[];
  action?: {
    viewApplicant?: string;
    contact?: string;
    reject?: string;
    edit?: string;
    delete?: string;
  };
};
