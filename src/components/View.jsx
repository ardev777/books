import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const View = () => {
   
  return (
    <div>
      

  
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Book" variant="outlined" />
      <TextField id="filled-basic" label="Category" variant="filled" />
      <TextField id="standard-basic" label="Author" variant="standard" />
    </Box>
  

    </div>
  )
}

export default View
