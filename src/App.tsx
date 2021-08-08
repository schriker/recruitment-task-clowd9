// import * as DB from '../db/mock.json';
import { Box, Container } from '@material-ui/core';
import useAppStyles from './AppStyles';

const App = () => {
  const classes = useAppStyles();

  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <Box>Table goes here</Box>
    </Container>
  );
};

export default App;
