import {
  Box,
  Chip,
  Collapse,
  IconButton,
  TableCell,
  TableRow as TableRowMUI,
} from '@material-ui/core';
import { useState } from 'react';
import { TableRowPropsType } from '../../types/table';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useRowStyles from './TableRowStyles';

const TableRow = ({ row }: TableRowPropsType) => {
  const classes = useRowStyles();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableRowMUI hover tabIndex={-1} className={classes.root}>
        <TableCell>{row.fullName}</TableCell>
        <TableCell>{row.userName}</TableCell>
        <TableCell>{row.accountType}</TableCell>
        <TableCell>{row.createDate}</TableCell>
        <TableCell>
          {row.permissions.length ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={handleToggle}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : null}
        </TableCell>
      </TableRowMUI>
      <TableRowMUI>
        <TableCell
          className={classes.drawer}
          align="right"
          colSpan={Object.keys(row).length}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={classes.permissions}>
              {row.permissions.map((permission, index) => (
                <Chip color="primary" key={index} label={permission} />
              ))}
            </Box>
          </Collapse>
        </TableCell>
      </TableRowMUI>
    </>
  );
};

export default TableRow;
