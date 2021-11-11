import React from "react";
import "./App.css";
import { Button, Grid, Typography } from "@mui/material";

function App(): JSX.Element {
  return (
    <Grid container textAlign="center" border="solid 2px purple">
      <Grid item xs={12}>
        <Typography variant="h1">Welcome to Material UI</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button>Get Started</Button>
      </Grid>
    </Grid>
  );
}

export default App;
