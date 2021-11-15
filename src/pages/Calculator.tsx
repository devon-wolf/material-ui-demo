import {
  AppBar,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { Box } from '@mui/system';
import { chickenGifs } from '../data/chickenGifs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CalculatorProps {}

const Calculator = (): JSX.Element => {
  const [lengthInput, setLengthInput] = useState('0');
  const handleLengthChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLengthInput(e.target.value);
  };

  const [widthInput, setWidthInput] = useState('0');
  const handleWidthChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWidthInput(e.target.value);
  };

  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const setChickenGif = () => {
    setLoading(true);
    const randomIndex = Math.floor(Math.random() * chickenGifs.length);
    setResult(chickenGifs[randomIndex].url);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Box height="100%">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">Chicken Coop Calculator</Typography>
        </Toolbar>
      </AppBar>

      <Grid container padding={2} spacing={2} rowSpacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">What To Do Here</Typography>
          <Typography>
            This is a description of what should be happening in this chicken
            coop calculation app. It gives general instruction on how to use the
            calculator and what you might hope to gain by such use.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">The Lumber Yard</Typography>
          <Typography>
            Here is some information about what lumber is available to you. This
            is not an actionable section, it is just for information.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} textAlign="center">
          <FormControl>
            <Typography variant="h5">
              I Want My Chicken Coop to Be...
            </Typography>

            <TextField
              label="Length"
              type="number"
              value={lengthInput}
              onChange={handleLengthChange}
              helperText="Length in feet"
              sx={{ margin: '1rem' }}
            />
            <TextField
              label="Width"
              type="number"
              value={widthInput}
              onChange={handleWidthChange}
              helperText="Width in feet"
              sx={{ margin: '1rem' }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={setChickenGif}
            >
              Calculate Lumber
            </Button>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className="centeredBox">
            {loading ? (
              <CircularProgress />
            ) : (
              result && (
                <img
                  src={result}
                  alt="chicken dance gif"
                  style={{ width: '100%' }}
                />
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;
