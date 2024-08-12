import { HomePage } from './Routes/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Bar from './AppBar/Bar';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { Description } from './Routes/Description';
import Search from './Routes/Search';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Reader } from './Routes/Reader';
const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: 0, md: 4 }, background: "#1f1c26" }}>
        <CssBaseline />
        <Bar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/description/:url" element={<Description />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/reader/:id" element={<Reader />} />
        </Routes>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
