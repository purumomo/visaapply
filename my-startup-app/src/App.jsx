import React from 'react';
import './App.css';
import Topmenu from './component/Topmenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className="App">
          <Topmenu />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/feature1" element={<Feature1Page />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;