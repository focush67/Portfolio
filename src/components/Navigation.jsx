import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Hidden, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact Me'];

  const drawer = (
    <div>
      <List>
        {menuItems.map((text) => (
          <ListItem button key={text} onClick={handleDrawerToggle}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Hidden smDown>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              
            </Typography>

            <div style={{
              display:"flex",
              justifyContent:"space-between"
            }}>
              {menuItems.map((text) => (
                <Typography key={text} variant="h6" sx={{ marginLeft: 2 }}>
                  {text}
                </Typography>
              ))}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default Navigation;
