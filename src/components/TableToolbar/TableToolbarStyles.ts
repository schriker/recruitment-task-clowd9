import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      flex: '1 1 100%',
    },
  })
);

export default useToolbarStyles;
