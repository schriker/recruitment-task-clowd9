import * as DB from './db/mock.json';
import { Container } from '@material-ui/core';
import useAppStyles from './AppStyles';
import Table from './components/Table/Table';

const App = () => {
  const classes = useAppStyles();

  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <Table accounts={DB} />
    </Container>
  );
};

export default App;
