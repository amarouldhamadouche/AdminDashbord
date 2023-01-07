import {Box, useTheme, Typography} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import { tokens } from "../theme" 
import { dataTeam } from "../data/data"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined"
import { Header } from "../components/Header"

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [   
   {field: "id", headerName:"ID"},
   {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "Name-column--cell"
   },
   {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left"
   },
   {
    field: "phone",
    headerName: "Phone Number",
    flex: 1
   },
   {
    field: "email",
    headerName: "Email",
    flex: 1
   },
   {
    field: "accessLevel",
    headerName: "access Level",
    flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: ({row: {access}}) => {
      return (
       <Box
         width="60%"
         m="0 auto"
         p="5px"
         display="flex"
         justifyContent="center"
         backgroundColor={
          access==="admin"
          ? colors.greenAccent[600]
          : access==="manager"?
          colors.greenAccent[700]
          :colors.greenAccent[800]
         }
         borderRadius="4px"
         >
          {access==="admin" &&
          <AdminPanelSettingsOutlinedIcon/>}
          {access==="manager" &&
          <SecurityOutlinedIcon/>}
          {access==="user" &&
          <LockOpenOutlinedIcon/>}
          <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
           {access}
          </Typography>
         </Box>
      )
    }
   }
   
  ]

  return (
    <Box m="20px">
     <Header title="TEAM" subTitle="managing the team members"/>
     <Box height="75vh" m="40px 0 0 0" sx={{"& .MuiDataGrid-root":{
      border: "none"
     },
     "& .MuiDataGrid-cell": {
       borderBottom: "none"
     },
     "& .Name-column--cell": {
      color: colors.greenAccent[300]
     },
     "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.blueAccent[700],
      borderBottom: "none",
     },
     "& .MuiDataGrid-vertualScroller": {
      backgroundColor: `${colors.primary[400]} !important`
     },
     "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.blueAccent[700]
     },
     "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`
     }

     }}>
       <DataGrid checkboxSelection rows={dataTeam} columns={columns}/>
     </Box>
    </Box>
  )
}

export default Team