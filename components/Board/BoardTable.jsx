import { Grid } from "@mui/material";
import React from "react";
import { CardTask } from "./CardTask/CardTask";
import { HeaderColumn } from "./HeaderColumn";
import { NewColumn } from "./NewColumn";
import { ViewTask } from "../ViewTask";

export const BoardTable = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ViewTask open={open} onClose={handleClose}></ViewTask>
      <Grid container columnGap={3} padding="24px" height="100%" wrap="nowrap">
        <Grid item>
          <Grid container direction="column" rowGap={2}>
            <Grid item>
              <HeaderColumn />
            </Grid>
            <Grid item>
              <CardTask onClick={handleOpen} />
            </Grid>
            <Grid item>
              <CardTask onClick={handleOpen} />
            </Grid>
            <Grid item>
              <CardTask onClick={handleOpen} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" rowGap={2}>
            <Grid item>
              <HeaderColumn />
            </Grid>
            <Grid item>
              <CardTask onClick={handleOpen} />
            </Grid>
            <Grid item>
              <CardTask onClick={handleOpen} />
            </Grid>
            <Grid item>
              <CardTask onClick={handleOpen} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <NewColumn />
        </Grid>
      </Grid>
    </>
  );
};
