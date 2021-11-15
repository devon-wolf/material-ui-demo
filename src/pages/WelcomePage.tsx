import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

export interface WelcomePageProps {
  handleStartClick: () => void;
}

const WelcomePage = ({ handleStartClick }: WelcomePageProps): JSX.Element => {
  return (
    <Grid container spacing={4} textAlign="center">
      <Grid item xs={12}>
        <Typography variant="h2">Welcome to Material UI</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleStartClick}>
          Let&apos;s Build a Chicken Coop
        </Button>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
