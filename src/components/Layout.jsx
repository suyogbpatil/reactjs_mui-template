import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { MyContext } from '../hooks/DataContext'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  const states = useContext(MyContext)
  return (
    <>
      <Box
        height={'100vh'}
        width={'100vw'}
        display={'flex'}
        flexDirection={'column'}
        overflow={'hidden'}
      >
        <Box height={56}>
          <Header />
        </Box>
        <Box height={'calc(100vh - 56px)'} width={'100%'} flexGrow={1}>
          <Outlet/>
        </Box>
        <Box height={56}>
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default Layout
