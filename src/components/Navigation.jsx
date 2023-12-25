import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Hidden, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close the mobile drawer if open
    setMobileOpen(false);
  };

  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact Me'];

  const drawer = (
    <div>
      <List>
        {menuItems.map((text) => (
          <ListItem button key={text} onClick={handleDrawerToggle}>
            <ScrollLink
              to={text.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={text === 'Home' ? scrollToTop : undefined} // Scroll to top only for Home
            >
              <ListItemText primary={text} />
            </ScrollLink>
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
              display: "flex",
              justifyContent: "space-between",
            }}>
              {menuItems.map((text) => (
                <ScrollLink key={text} to={text.toLowerCase()} smooth={true} duration={500} onClick={text === 'Home' ? scrollToTop : undefined}>
                  <Typography variant="h6" sx={{ marginLeft: 2, cursor: 'pointer' }} className="menu-item">
                    {text}
                  </Typography>
                </ScrollLink>
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
