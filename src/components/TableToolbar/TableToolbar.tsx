import { Toolbar, Typography } from '@material-ui/core';
import { TableToolbarPropsType } from '../../types/table';
import useToolbarStyles from './TableToolbarStyles';

const TableToolbar = ({ title }: TableToolbarPropsType) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
    </Toolbar>
  );
};

export default TableToolbar;
