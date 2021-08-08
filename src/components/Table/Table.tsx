import {
  Paper,
  TableContainer,
  Table as TableMUI,
  TablePagination,
} from '@material-ui/core';
import { useState } from 'react';
import { HEAD_CELLS, ROWS_PER_PAGE } from '../../consts/headCells';
import { TableData } from '../../types/data';
import { Order, TableFilters, TablePropsType } from '../../types/table';
import filterData from '../../utils/filter';
import TableBody from '../TableBody/TableBody';
import TableFilter from '../TableFilter/TableFilter';
import TableHead from '../TableHead/TableHead';
import TableToolbar from '../TableToolbar/TableToolbar';
import useTableStyles from './TableStyles';

const filters: TableFilters[] = [];

HEAD_CELLS.forEach((cell) => {
  if (cell.filter)
    filters.push({
      value: cell.id,
      label: cell.label,
    });
});

const Table = ({ rows }: TablePropsType) => {
  const classes = useTableStyles();
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<Order>('asc');
  const [filterValue, setFilterValue] = useState('');
  const [filter, setFilter] = useState<keyof TableData>(filters[0].value);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE);
  const [orderBy, setOrderBy] = useState<keyof TableData>('fullName');

  const handleRequestSort = (
    _: React.MouseEvent<unknown, MouseEvent>,
    property: keyof TableData
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = filterData(rows, filterValue, filter);

  return (
    <Paper elevation={3} className={classes.wrapper}>
      <TableToolbar title="Accounts" />
      <TableFilter
        filters={filters}
        filter={filter}
        setFilter={setFilter}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <TableContainer>
        <TableMUI aria-labelledby="tableTitle" aria-label="accounts table">
          <TableHead
            headCells={HEAD_CELLS}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody
            rowsPerPage={rowsPerPage}
            rows={filteredRows}
            page={page}
            order={order}
            orderBy={orderBy}
          />
        </TableMUI>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Table;
