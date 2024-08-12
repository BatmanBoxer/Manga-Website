import React from 'react';
import { Box, Container, useMediaQuery } from '@mui/material';
import Content from '../ReaderPageComponent/Global/Content'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

const theme = createTheme(); 
export function Reader() {

  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ThemeProvider theme={theme}>
        {isMediumOrLarger ? (
          <Container maxWidth="lg">
            <Content />
          </Container>
        ) : (
          <Box>
            <Content />
          </Box>
        )}
    </ThemeProvider>
  );
}

