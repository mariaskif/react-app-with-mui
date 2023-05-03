import React from 'react'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home'
import Create from '@mui/icons-material/Create'
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTheme } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useLocation} from  'react-router-dom'
export default function Drawerr({drawerWidth,setMyMode,noneOrblock,drwerType,setblno,settypdrwer}) {
  
const currloc=useLocation();
  const theme=useTheme();
  const listItem=[
    {text:"Home",icon:<Home/>,path:"/"},
  {text:"Create",icon:<Create />,path:"/create"},
{text:"Profile",icon:<Person2Icon/>,path:"/profile"},
{text:"Settings",icon:<SettingsIcon/>,path:"/settings"},
 ]
  return (
    <Drawer
    sx={{
      display:{xs:noneOrblock, sm: "block"},
      width:`${drawerWidth}px`,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width:`${drawerWidth}px`,
        boxSizing: 'border-box',
      },
    }}
    variant= {drwerType}
    anchor="left"
    open={true}
    onClose={()=>{
      setblno('none');
      settypdrwer('permanent');

    }}
  >

   
  <List>
  <ListItem disablePadding sx={{display:"flex",justifyContent:"center", mb:"14px"}}>
  <IconButton  onClick={()=>{
    localStorage.setItem("mood",theme.palette.mode === "light"? "dark":"light");
      setMyMode( theme.palette.mode === "light"? "dark":"light");
    }} 
    color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{color:"orange"}} /> : <Brightness4Icon />}
      </IconButton>
  </ListItem>

    <Divider />

{listItem.map((item) => {
  return(
    <ListItem key={item.text}  sx={{bgcolor: currloc.pathname === '/'? theme.palette.col.main : null}} disablePadding>
    <ListItemButton  component="a" href={item.path}>
      <ListItemIcon>
      {item.icon}
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItemButton>
</ListItem>
  )
}
)}








  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
  </List>

  </Drawer>
  )
}
