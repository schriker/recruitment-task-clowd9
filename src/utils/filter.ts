import { TableData } from '../types/data';

const filterData = (
  data: TableData[],
  filterValue: string,
  filter: keyof TableData
) =>
  data.filter((row) => {
    const data = row[filter];
    if (typeof data === 'string') {
      return data.toLowerCase().includes(filterValue.toLowerCase());
    } else {
      return true;
    }
  });

export default filterData;
