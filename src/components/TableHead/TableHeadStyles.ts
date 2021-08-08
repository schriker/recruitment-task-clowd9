import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useTableHeadStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[100],
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })
);

export default useTableHeadStyles;
