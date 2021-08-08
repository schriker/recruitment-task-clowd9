import { TableData } from './data';

export type Order = 'asc' | 'desc';

export type TablePropsType = {
  rows: TableData[];
};

export type TableToolbarPropsType = {
  title: string;
};

export interface TableHeadCell {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
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
