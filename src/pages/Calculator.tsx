import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Box } from "@mui/system";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CalculatorProps {}
const Calculator = (): JSX.Element => {
  const handleMenuClick = () =>
    console.log(
      "I do not yet know what this menu button should do, I just put it here to look ~professional~"
    );
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

      <Grid container padding={1} spacing={2}>
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
      </Grid>
    </Box>
  );
};

export default Calculator;
