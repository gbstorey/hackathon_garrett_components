import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import theme from "./Theme.js"
import logo from "../../assets/images/logo.png"


export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button href="/">
        <img src={logo} alt="logo"/>
        </Button>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1, marginLeft:"20px", fontWeight: "500", marginBottom:"5px"}}>
            Revitalize
          </Typography>
          <Button href="/about" color="inherit">About</Button>
          <Button href="/rent" color="inherit">Rent</Button>
          <Button href="/skills" color="inherit">Skills</Button>
          <Button href="/contact" color="inherit">Contact Us</Button>
          <Button href="/signup" color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
