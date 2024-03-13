import React from 'react';
import { Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Typography variant="h4" component="h1" gutterBottom>
        欢迎来到我们的应用程序
      </Typography>
      <Typography variant="body1">
        这是我们应用程序的主页面。您可以在左侧菜单中选择不同的功能。
      </Typography>
    </Box>
  );
};

export default HomePage;