import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Paper, Box } from '@mui/material';


export default function Home() {
  
const [mydata,setdata]=useState([]);
  useEffect(() => {
  fetch("http://localhost:3100/mydata").then((response)=>response.json()).then((data)=>setdata(data))
  }
  ,[]);

  let total=0;

  return (

      <Box>
      {mydata.map((item)=>{
const handel=  (item) => {
  fetch(` http://localhost:3100/mydata/${item.id}`,{method:"DELETE"})

  const newarr=mydata.filter((myop) => {
    return(myop.id !== item.id) 
  });
  setdata(newarr);
                      }

    total += item.price
     return(
<Paper key={item.id} sx={{position:'relative',width:"366px",display:"flex",justifyContent:"space-between",mt:"22px",pt:"27px",pb:"7px"}}>
  <Typography sx={{ml:"16px",fontSize:"1.3em"}} variant="h6">{item.title}</Typography>
  <Typography sx={{mr:"33px",fontWeight:500,fontSize:"1.4em",opacity:"0.8"}} variant="h3">{item.price}$</Typography>
  <IconButton onClick={() => { handel(item);}} sx={{position:"absolute",top:0,right:0}}>
  <CloseIcon/>
 </IconButton>
 </Paper>
  )

})}

<Typography variant="h6" textAlign="center" mt="55px"> 👉 Total Price {total}$</Typography>
</Box>
  )
}
