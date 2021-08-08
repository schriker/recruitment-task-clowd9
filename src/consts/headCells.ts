import { TableHeadCell } from '../types/table';

export const headCells: TableHeadCell[] = [
  {
    id: 'fullName',
    label: 'Name and Surname',
    sortable: true,
  },
  {
    id: 'userName',
    label: 'User Name',
    sortable: true,
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
