import { Box } from "@mui/material"
import { Header } from "../components/Header"
import { GeoChart } from "../components/GeoChart"
import { tokens } from "../theme"
import { useTheme } from '@mui/material'

const Geography = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  
  return (
    <Box m="20px">
      <Header title="Geo Chart" subTitle="Simple Geo Chart"/>
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
       <GeoChart/>
      </Box>
    </Box>
  )
}

export default Geography