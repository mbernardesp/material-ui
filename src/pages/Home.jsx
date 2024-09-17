import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav'
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav></Sidenav>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Home</h1>
        </Box>
      </Box>
    </>
  )
}

export default Home