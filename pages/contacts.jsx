import {Box, useTheme} from "@mui/material"
import {DataGrid, GridToolbar} from "@mui/x-data-grid"
import { tokens } from "../theme" 
import { dataContacts } from "../data/data"
import { Header } from "../components/Header"

const Contacts = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [   
   {field: "id", headerName:"ID", flex: 0.5},
   {
    field: "registrarId",
    headerName: "Register Id"
   },
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
    field: "address",
    headerName: "Address",
    flex: 1
   },
   {
    field: "city",
    headerName: "City",
    flex: 1
   },
   {
    field: "zipCode",
    headerName: "Zip Code",
    flex: 1,
   }
   
  ]

  return (
    <Box m="20px">
     <Header title="Contacts" subTitle="List of contacts for future reference"/>
     <Box height="75vh" m="40px 0 0 0"
      sx={{"& .MuiDataGrid-root":{
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
     },
    
     "& .MuiDataGrid-panelContent": {
       backgroundColor: "red"
     },
     "& .MuiDataGrid-columnsPanelRow": {
      backgroundColor: 'blue !important'
     },
     "& .MuiDataGrid-panelHeader": {
      backgroundColor:"red"
     },
     "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      color: `${colors.grey[100]} !important`,
     }

     }}>
       <DataGrid checkboxSelection rows={dataContacts} columns={columns} 
        components={{Toolbar: GridToolbar}} 
        componentsProps={{
         panel:{
          sx:{
           
           '& .MuiButtonBase-root': {
            color: `${colors.greenAccent[100]} !important`,
           },
           '& .MuiSwitch-track': {
            backgroundColor: `${colors.greenAccent[400]} !important`
           }
          }
         }
        }}
        />
     </Box>
    </Box>
  )
}

export default Contacts