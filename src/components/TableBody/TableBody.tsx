import { TableBody as TableBodyMUI } from '@material-ui/core';
import { TableData } from '../../types/data';
import { TableBodyPropsType } from '../../types/table';
import { getComparator, tableSort } from '../../utils/sort';
import TableRow from '../TableRow/TableRow';

export type Key = 'fullName' | 'userName' | 'accountType' | string;
const TableBody = ({
  order,
  orderBy,
  rows,
  rowsPerPage,
  page,
}: TableBodyPropsType) => {
  return (
    <TableBodyMUI>
      {tableSort<TableData>(
        rows,
        getComparator<keyof TableData>(order, orderBy)
      )
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => (
          <TableRow row={row} key={index} />
        ))}
    </TableBodyMUI>
  );
};

export default TableBody;
