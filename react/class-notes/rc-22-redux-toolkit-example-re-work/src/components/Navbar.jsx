import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";


const Navbar = () => {






  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clarusway News
          </Typography>

          (
          <Button color="inherit">Logout</Button>
          ) : (
          <Button color="inherit">signup</Button>
          )        </Toolbar>
      </AppBar>

    </Box>
  );

}
export default Navbar