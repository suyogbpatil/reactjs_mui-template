import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box height={56} width={'100%'} sx={{backgroundColor:'gray'}} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography color={'white'} fontSize={'20px'}>Header</Typography>
    </Box>
  )
}

export default Header