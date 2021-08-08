import { createStyles, makeStyles } from "@material-ui/core";

const useToolbarStyles = makeStyles(() =>
  createStyles({
    title: {
      flex: '1 1 100%',
    },
  })
);

export default useToolbarStyles;
