import Drawerr from '../components/Drawerr';
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material';
import Appbar from '../components/Appbar';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getDesignTokens from '../styles/MyThemes';
const drawerWidth = 240;
export default function Root() {
  const [mode, setMyMode] = useState("light");

const [noneOrblock,setblno]=useState('none');
const [drwerType,settypdrwer]=useState('permanent');
const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div>
       <ThemeProvider theme={theme}>
       <CssBaseline />
    <Appbar drawerWidth={drawerWidth} setblno={setblno} settypdrwer={settypdrwer}/>
    <Drawerr drawerWidth={drawerWidth} setMyMode={setMyMode} noneOrblock={noneOrblock} drwerType={drwerType} settypdrwer={settypdrwer} setblno={setblno} />

    <Box component="main"  sx={{ml:{sm:`${drawerWidth}px`} ,display:"flex",justifyContent:"center",mt:"66px"}}>
    <Outlet />
      </Box >
      </ThemeProvider>
    </div>
  )
}
