import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    drawer: {
      paddingBottom: 0,
      paddingTop: 0,
    },
    permissions: {
      margin: theme.spacing(1),
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  })
);

export default useRowStyles;
