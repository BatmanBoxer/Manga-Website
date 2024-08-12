import React from 'react';
import { Box, Container, CssBaseline, useMediaQuery } from '@mui/material';
import Content from '../SearchComponent/Global/Content';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();
const Search = () => {
 const isMediumOrLarger = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ThemeProvider theme={theme}>
        {isMediumOrLarger ? (
          <Container maxWidth="lg" >
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

export default Search
