import React from 'react'
import { Sidebar } from './Sidebar'
import {Topbar} from './Topbar'
import { Box } from '@mui/material'

export const Layout = ({children}) => {
  return (
    <Box display='flex'>
      <Sidebar/>
      <Box display="flex" flexDirection="column" flex="1">  
       <Topbar/>
       {children}
       </Box>
    </Box>  
      
 
  )
}

