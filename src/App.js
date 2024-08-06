import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Bar from "./AppBar/Bar";
import Content from "./Content/Global/Content";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Bar />
      <Container maxWidth="lg" >
        <Content/>
      </Container>
    </Box>
  );
}

export default App;
