import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const TopMenu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          主页
        </Button>
        <Button color="inherit" component={Link} to="/feature1">
          永驻资格判断
        </Button>
        <Button color="inherit" component={Link} to="/feature2">
          材料申请清单check
        </Button>
        {/* 根据需求添加更多菜单项 */}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;