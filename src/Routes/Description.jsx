import React from 'react';
import { Box, Container,useMediaQuery } from '@mui/material';
import Content from '../DescriptionPageComponent/Global/Content';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(); 
export function Description() {
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


