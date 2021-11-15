import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Layout.css';

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Box className="layout">{children}</Box>
    </>
  );
};

export default Layout;
