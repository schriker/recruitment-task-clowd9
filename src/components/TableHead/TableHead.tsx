import {
  TableCell,
  TableRow,
  TableSortLabel,
  TableHead as TableHeadMUI,
} from '@material-ui/core';
import { TableData } from '../../types/data';
import { TableHeadPropsType } from '../../types/table';
import useTableHeadStyles from './TableHeadStyles';

const TableHead = ({
  onRequestSort,
  headCells,
  orderBy,
  order,
}: TableHeadPropsType) => {
  const classes = useTableHeadStyles();

  const createSortHandler =
    (property: keyof TableData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHeadMUI>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHeadMUI>
  );
};

export default TableHead;
