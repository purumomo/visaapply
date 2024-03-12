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
          <ListItemText primary="永驻资格判断" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="材料申请清单check" />
        </ListItem>
        {/* 根据需求添加更多菜单项 */}
      </List>
    </Drawer>
  );
};

export default SideMenu;