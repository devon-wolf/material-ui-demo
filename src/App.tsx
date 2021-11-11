import React from "react";
import "./App.css";
import { Button, CssBaseline, Grid, Typography } from "@mui/material";

function App(): JSX.Element {
  return (
    <>
    <CssBaseline />
    <Grid container textAlign="center" className="App">
      <Grid item xs={12}>
        <Typography variant="h1">Welcome to Material UI</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Get Started</Button>
      </Grid>
    </Grid>
    </>
  );
}

export default App;
