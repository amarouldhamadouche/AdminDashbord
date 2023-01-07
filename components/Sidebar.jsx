import {useState} from 'react'
import { ProSidebarProvider, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, useTheme, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { tokens } from '../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import { useRouter } from 'next/router'

export const Item = ({title, to, icon, selected, setSelected,isCollapsed})=>{
 const theme = useTheme()
 const colors = tokens(theme.palette.mode)
 return (
 
 <Link href={to} passHref>  
  <MenuItem
   active = {selected === to.slice(1)}
   sx={{
    padding:0, 
   }}
   onClick={()=>setSelected(to.slice(1))}
   icon={icon}
  >
   {!isCollapsed && title}
  </MenuItem> 
 </Link>
 )

}

export const Sidebar = () => {
 const theme = useTheme()
 const colors = tokens(theme.palette.mode)
 const [isCollapsed, setIsCollapsed] = useState(false)
 const router = useRouter()
 const [selected, setSelected] = useState(router.pathname.slice(1))
 

  return (
    <Box 
     sx={{
      p: '0px 5px 0px 5px',
      background:`${colors.primary[400]}`,
      "& .ps-menuitem-root .ps-menu-button ":{
        color:`${colors.grey[100]} !important`,
        padding: "0px 5px 0px 10px !important"
      },
      "& .ps-menuitem-root.ps-active .ps-menu-button ":{
        color:`${colors.greenAccent[400]} !important`,
        backgroundColor: `${colors.primary[400]} !important`
      },
      "& .ps-menuitem-root .ps-menu-button:hover":{ 
        color:`${colors.greenAccent[400]} !important`,
        backgroundColor: `${colors.primary[400]} !important`
      }

     }}
    >
    <ProSidebarProvider collapsed={isCollapsed}>
    <Menu 
       style={{backgroundColor:colors.primary[400]}} iconShape="square">
      <MenuItem 
        onClick={()=>setIsCollapsed(!isCollapsed)}
        icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
        style={{backgroundColor:colors.primary[400], margin:"10px 0 20px 0",padding:"0px",  color: colors.grey[100] }}
       >
        {!isCollapsed && (
         <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          
         >       
          <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
          <MenuOutlinedIcon/>
          </IconButton>
          <Typography  variant='h3' color={colors.grey[100]}>
           Admin
          </Typography>
         </Box> 
        )}
       </MenuItem> 

       {!isCollapsed && (
        <Box mb="25px">
         <Box display="flex" justifyContent="center" alignItems="center">
          <Image alt="profile-user" width={100} height={100} src='/avatar.png' style={{cursor:'pointer',borderRadius:'50%'}}/>
         </Box>
         <Box textAlign="center">
          <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" sx={{m:'10px 0 0 0'}}>           
           ED ROH
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>
           VP Fancy Admin
          </Typography>
         </Box>
        </Box>
       )}
      
       <Box paddinLeft={isCollapsed ? undefined : "0px"} display="flex" flexDirection="column">
        <Item
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />  
        <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0 5px 0px"}}>
         Data
        </Typography>
        <Item
          title="manage team"
          to="/team"
          icon={<PersonOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />  
         <Item
          title="Contacts informations"
          to="/contacts"
          icon={<ContactsOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />  
         <Item
          title="Invoices Balance"
          to="/invoice"
          icon={<ReceiptOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />  
        <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0 5px 0px"}}>
         Pages
        </Typography>
        <Item
          title="Profile Form"
          to="/form"
          icon={<PersonOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />  
        <Item
          title="Calandar"
          to="/calendar"
          icon={<CalendarTodayOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        /> 
         <Item
          title="FAQ"
          to="/faq"
          icon={<HelpOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />  
         <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0 5px 0px"}}>
         Charts
        </Typography>
         <Item
          title="Bar Chart"
          to="/bar"
          icon={<BarChartOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        /> 
        <Item
          title="Pie Chart"
          to="/pie"
          icon={<PieChartOutlineOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        /> 
        <Item
          title="Line Chart"
          to="/line"
          icon={<TimelineOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        /> 
        <Item
          title="Geography Chart"
          to="/geography"
          icon={<MapOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        /> 
       </Box>
         
        
     </Menu>
    </ProSidebarProvider>
    </Box>
  )
}

