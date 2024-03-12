import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

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
        <ListItem button>
          <ListItemText primary="功能1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="功能2" />
        </ListItem>
        {/* 根据需求添加更多菜单项 */}
      </List>
    </Drawer>
  );
};

export default SideMenu;