import { createStyles, makeStyles } from '@material-ui/core';

const useTableStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: '100%',
      overflow: 'hidden',
    },
  })
);

export default useTableStyles;
