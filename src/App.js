import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Bar from "./AppBar/Bar";
import Content from "./Content/Global/Content";

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: {sm:0,md:2} }}>
      <Bar />
      <Container
        maxWidth="lg"
        sx={{
          display: {
            xs: 'none', // Hide on extra-small screens
            md: 'block', // Show on medium screens and larger
          },
        }}
      >
        <Content />
      </Container>
      <Box sx={{display:{
          xs: 'block',
          md:'none'// Show on extra-small screens 
      }}}>
      <Content />
      </Box>
    </Box>
  );
}
export default App;
