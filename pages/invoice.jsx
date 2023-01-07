import {Box, useTheme, Typography} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import { tokens } from "../theme" 
import { dataInvoices } from "../data/data"
import { Header } from "../components/Header"

const Invoice = () => {
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
    field: "cost",
    headerName: "Cost",
    flex: 1,
    renderCell: (params) => (
     <Typography color={colors.greenAccent[500]}>
      ${params.row.cost}
     </Typography>
    )
   },
   {
    field: "date",
    headerName: "Date",
    flex: 1
   },
   
  ]

  return (
    <Box m="20px">
     <Header title="Invoice" subTitle="List of Invoice Balance"/>
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
     }}>
       <DataGrid checkboxSelection rows={dataInvoices} columns={columns}  />
     </Box>
    </Box>
  )
}

export default Invoice