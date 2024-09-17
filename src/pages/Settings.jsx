import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav'

function Settings() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav></Sidenav>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Settings</h1>
        </Box>
      </Box>
    </>
  )
}

export default Settings