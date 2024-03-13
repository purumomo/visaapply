import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        style: {
          width: 200,
        },
      }}
    >
      <List>
        <ListItem component={Link} to="/">
          <ListItemText primary="主页" />
        </ListItem>
        <ListItem component={Link} to="/feature1">
          <ListItemText primary="永驻资格判断" />
        </ListItem>
        <ListItem component={Link} to="/feature2">
          <ListItemText primary="材料申请清单check" />
        </ListItem>
        {/* 根据需求添加更多菜单项 */}
      </List>
    </Drawer>
  );
};

export default SideMenu;