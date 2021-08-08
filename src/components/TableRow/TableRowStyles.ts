import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 65,
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
