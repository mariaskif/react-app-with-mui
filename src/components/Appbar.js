import React from 'react'
import { Toolbar } from '@mui/material'
import { Link}  from '@mui/material';
import {Avatar, Typography, IconButton} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar({drawerWidth,setblno,settypdrwer}) {
  return (
    
    <div>
      
      <AppBar  sx={{ width:{sm:`calc(100% - ${drawerWidth}px)`} , ml:{xs:0,sm:`${drawerWidth}px`} }} position="static">

      <Toolbar>
        <IconButton onClick={()=>{
          setblno("block");
          settypdrwer("temporary");
        }} sx={{display:{sm:"none"}}}>
          <MenuIcon/>
        </IconButton>
            <Link href="/" color="inherit" underline="none" sx={{ flexGrow: 1 , "&:hover":{fontSize:16.5}}} >My Experians</Link>
      
      <Typography variant="body1" color="inherit" mr={2}>Login</Typography>
          <Avatar alt="Remy Sharp" src=".\imges\th.jpg" />
        </Toolbar>
      </AppBar>
    
    </div>
  )
}
