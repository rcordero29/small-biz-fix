import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Nav(){
return (
  <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        sx={{ flexGrow: 1,
        // remove link styles
        color: "inherit",
        textDecoration: "none",
       }}
  
        align="left"
        component={Link}
        to="/"
      >
        San Antonio Taco Shops
      </Typography>
      <Button color="inherit" component={Link} to ={`/.details.js`}>listings</Button>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
</Box>
)
}
export default Nav;