import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box height={56} width={'100%'} sx={{backgroundColor:'gray'}} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography color={'white'} fontSize={'20px'}>Footer</Typography>
    </Box>
  )
}

export default Footer