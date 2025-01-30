import React from 'react'
import {  AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { kullaniciSil } from '../features/yetkiSlice';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

const {email}=useSelector((state)=>state.yetkiSlice)

const dispatch=useDispatch()
const navigate=useNavigate()
const handleLogout=()=>{

  dispatch(kullaniciSil())

navigate("/login")

}



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clarusway News
          </Typography>

          {email ? (
            <Button onClick={handleLogout} color="inherit">Logout</Button>
          ) : (
            <Button color="inherit">signup</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar