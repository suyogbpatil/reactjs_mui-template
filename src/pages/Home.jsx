import { Box, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{backgroundColor:'whitesmoke'}}>
        <Typography fontSize={'25px'}>Home</Typography>
    </Box>
  )
}

export default Home