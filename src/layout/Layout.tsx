import { CssBaseline, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { theme } from '../theme/AppTheme';
import './Layout.css';

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="layout">{children}</Box>
    </ThemeProvider>
  );
};

export default Layout;
