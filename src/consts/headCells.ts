import { TableHeadCell } from '../types/table';

export const ROWS_PER_PAGE = 5;

export const HEAD_CELLS: TableHeadCell[] = [
  {
    id: 'fullName',
    label: 'Name and Surname',
    sortable: true,
  },
  {
    id: 'userName',
    label: 'User Name',
    sortable: false,
  },
  {
    id: 'accountType',
    label: 'Account Type',
    sortable: true,
  },
  {
    id: 'createDate',
    label: 'Date',
    sortable: false,
  },
  {
    id: 'permissions',
    label: 'Permissions',
    sortable: false,
  },
];
