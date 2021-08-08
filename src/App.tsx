import DB from './db/mock.json';
import { Container } from '@material-ui/core';
import useAppStyles from './AppStyles';
import Table from './components/Table/Table';
import { TableData } from './types/data';

const App = () => {
  const classes = useAppStyles();

  const tableData: TableData[] = DB.map((account) => {
    const { id, firstName, lastName, ...rest } = account;

    return {
      fullName: `${firstName ? `${firstName} ` : ''}${
        lastName ? lastName : ''
      }`.trim(),
      ...rest,
    };
  });

  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <Table rows={tableData} />
    </Container>
  );
};

export default App;
