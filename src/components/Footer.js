import React from 'react'
import { Box, Typography, Grid, Stack } from '@mui/material'

const Footer = () => {

  const footerGridStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
  return (
    <Box sx={{ mt: 10, mb: 0, backgroundColor: 'black', width: '100vw'}}>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={footerGridStyle}>
          <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"} color={'white'}>
            © 2024 All Rights Reserved
          </Typography>
        </Grid>
        <Grid item xs={4} sx={footerGridStyle}>
          <img src="/tdd_white_Logo.png" alt="TDD Logo" style={{width: 150 }}/>
        </Grid>
        <Grid item xs={4} sx={footerGridStyle}>
          <Stack>
          <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"} color={'white'}>
            Contact me at:
          </Typography>
          
          <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"} color="white">
            <a href="https://www.linkedin.com/in/jonathan-belloit-6313701b4/" target="_blank" rel="noreferrer">LinkedIn</a>
          </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer