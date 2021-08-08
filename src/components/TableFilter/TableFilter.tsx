import { Box, MenuItem, TextField } from '@material-ui/core';
import { TableData } from '../../types/data';
import { TableFiltersPropsType } from '../../types/table';
import useTableFIlterStyles from './TableFilterStyles';

const TableFilter = ({
  filters,
  filter,
  setFilter,
  filterValue,
  setFilterValue,
}: TableFiltersPropsType) => {
  const classes = useTableFIlterStyles();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value as keyof TableData);
  };

  const handleFilterValueCahnge = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterValue(event.target.value);
  };
  return (
    <Box className={classes.wrapper}>
      <TextField
        label="Search"
        value={filterValue}
        onChange={handleFilterValueCahnge}
      />
      <TextField select label="By" value={filter} onChange={handleFilterChange}>
        {filters.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default TableFilter;
