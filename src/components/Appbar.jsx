import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const Appbar = () => {
  return (
    <div>

  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LIBRARY
          </Typography>
          <Button variant="text">Text</Button>
<Button variant="contained">Info</Button>
<Button variant="outlined">Outlined</Button>
        </Toolbar>
      </AppBar>
    </Box>
  

    </div>
  )
}

export default Appbar
