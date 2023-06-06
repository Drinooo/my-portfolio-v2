import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from './ThemeProvider';

export const CustButton = ({variant}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button 
          variant={variant}
          color='tertiary'
          sx={{
            padding: '20px 40px',
            borderRadius: '10px'
          }}
        >
            Download CV
        </Button>
      </ThemeProvider>
    </>
  );
};

export const CustButton1 = ({variant}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button 
          variant={variant}
          color='tertiary'
          sx={{ 
            padding: '20px 50px',
            borderRadius: '10px'
           }}
        >
            UI/UX Designer
        </Button>
      </ThemeProvider>
    </>
  );
};
