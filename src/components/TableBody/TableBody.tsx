// @ts-nocheck
import {
  TableRow,
  TableBody as TableBodyMUI,
  TableCell,
} from '@material-ui/core';
import { TableData } from '../../types/data';
import { TableBodyPropsType } from '../../types/table';
import { getComparator, tableSort } from '../../utils/sort';

export type Key = 'fullName' | 'userName' | 'accountType' | string;
const TableBody = ({ order, orderBy, rows }: TableBodyPropsType) => {
  return (
    <TableBodyMUI>
      {tableSort<TableData>(rows, getComparator(order, orderBy)).map(
        (row, index) => {
          return (
            <TableRow hover tabIndex={-1} key={index}>
              <TableCell>{row.fullName}</TableCell>
              <TableCell>{row.userName}</TableCell>
              <TableCell>{row.accountType}</TableCell>
              <TableCell>{row.createDate}</TableCell>
              <TableCell>{row.permissions}</TableCell>
            </TableRow>
          );
        }
      )}
    </TableBodyMUI>
  );
};

export default TableBody;
