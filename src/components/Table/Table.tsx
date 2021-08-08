import { Paper } from '@material-ui/core';
import { TablePropsType } from '../../types/table';
import TableToolbar from '../TableToolbar/TableToolbar';
import useTableStyles from './TableStyles';

const Table = ({ accounts }: TablePropsType) => {
  const classes = useTableStyles();

  return (
    <Paper>
      <TableToolbar title="Accounts" />
    </Paper>
  );
};

export default Table;
