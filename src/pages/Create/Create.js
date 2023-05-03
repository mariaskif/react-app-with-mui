import React, { useState } from 'react'
import { TextField ,InputAdornment, Box} from '@mui/material'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));


export default function Create() {
  const [title,settitle]=useState("");
  const [price,setprice]=useState(0);

const navigate=useNavigate();
  return (
    <div>
      <Box  autoComplete='off'  component="form">
     <TextField   
     onChange={(eo) => {
       settitle(eo.target.value);
     }
     }
     fullWidth
          label="Transaction Title"
          id="filled-start-adornment"
          sx={{ mt: "22px", display:'block' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">👉</InputAdornment>,
          }}
          variant="filled"
        />
             <TextField     onChange={(eo) => {
                setprice(Number(eo.target.value));
              }}
             fullWidth
          label="Amount"
          id="filled-start-adornment"
          sx={{ mt: "22px", display:'block' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />
          <ColorButton 
          onClick={(params) => {
            fetch("http://localhost:3100/mydata",{method:"POST",headers:{
              'Content-Type':'application/json'
            },body:JSON.stringify({title,price})}).then(()=>{
              navigate("/")
            })
          }
          }
          variant="contained" sx={{mt:"22px"}}>Submit < NavigateNextIcon/> </ColorButton>
        </Box>
    </div>
  )
}
