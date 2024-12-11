import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import FeaturePage from './components/FeaturePage';
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        <CssBaseline />
        <Box component="main" sx={{ flexGrow: 1, height: '100vh' }}>
          <Routes>
            <Route path="/" element={<FeaturePage />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
