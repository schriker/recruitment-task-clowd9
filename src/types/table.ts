import { TableData } from './data';

export type Order = 'asc' | 'desc';

export type TablePropsType = {
  rows: TableData[];
};

export type TableToolbarPropsType = {
  title: string;
};

export interface TableHeadCell {
  id: keyof TableData;
  label: string;
  sortable: boolean;
}

export type TableHeadPropsType = {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TableData
  ) => void;
  order: Order;
  orderBy: string;
  headCells: TableHeadCell[];
};

export type TableBodyPropsType = {
  rows: TableData[];
  page: number;
  rowsPerPage: number;
  order: Order;
  orderBy: keyof TableData;
};

export type TableRowPropsType = {
  row: TableData;
};
