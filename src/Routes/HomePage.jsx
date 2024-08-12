import React from 'react';
import { Box, Container, useMediaQuery } from '@mui/material';
import Content from '../HomePageComponent/Global/Content'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(); // You can customize the theme here

export function HomePage() {
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

