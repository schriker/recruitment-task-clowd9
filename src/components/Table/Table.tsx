import { Paper, TableContainer, Table as TableMUI } from '@material-ui/core';
import { useState } from 'react';
import { headCells } from '../../consts/headCells';
import { TableData } from '../../types/data';
import { Order, TablePropsType } from '../../types/table';
import TableBody from '../TableBody/TableBody';
import TableHead from '../TableHead/TableHead';
import TableToolbar from '../TableToolbar/TableToolbar';
import useTableStyles from './TableStyles';

const Table = ({ rows }: TablePropsType) => {
  const classes = useTableStyles();
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof TableData>('fullName');

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof TableData
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Paper>
      <TableToolbar title="Accounts" />
      <TableContainer>
        <TableMUI aria-labelledby="tableTitle" aria-label="accounts table">
          <TableHead
            headCells={headCells}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody rows={rows} order={order} orderBy={orderBy} />
        </TableMUI>
      </TableContainer>
    </Paper>
  );
};

export default Table;
