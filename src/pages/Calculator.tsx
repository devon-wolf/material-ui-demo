import {
  AppBar,
  Button,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { ChangeEvent, useState } from "react";
import { Box, width } from "@mui/system";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CalculatorProps {}
const Calculator = (): JSX.Element => {
  const [lengthInput, setLengthInput] = useState("0");
  const handleLengthChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLengthInput(e.target.value);
  };

  const [widthInput, setWidthInput] = useState("0");
  const handleWidthChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWidthInput(e.target.value);
  };

  const handleMenuClick = () =>
    console.log(
      "I do not yet know what this menu button should do, I just put it here to look ~professional~"
    );

  const handleCalculate = () => {
    console.log("WIDTH: ", widthInput, "LENGTH: ", lengthInput, "RESULT: ???");
  };
  
  return (
    <Box height="100%">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            size="large"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">Chicken Coop Calculator</Typography>
        </Toolbar>
      </AppBar>

      <Grid container padding={2} spacing={2}>
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
        <Grid item xs={12} textAlign="center">
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
              sx={{ margin: "1rem" }}
            />
            <TextField
              label="Width"
              type="number"
              value={widthInput}
              onChange={handleWidthChange}
              helperText="Width in feet"
              sx={{ margin: "1rem" }}
            />
            <Button onClick={handleCalculate}>Calculate Lumber</Button>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;
