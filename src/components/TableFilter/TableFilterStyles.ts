import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useTableFIlterStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        flex: '0 1 300px',
      },
    },
  })
);

export default useTableFIlterStyles;
