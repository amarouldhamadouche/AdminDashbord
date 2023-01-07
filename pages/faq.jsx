import { Box, useTheme, Typography } from "@mui/material"
import { Header } from "../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../theme"

const Faq = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px' sx={{
      "& .MuiPaper-root": {
        backgroundColor: `${colors.primary[400]} !important`
      }
    }}>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page"/>
      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon/>}
         >
          <Typography
           variant="h5"
           color={colors.greenAccent[500]}>
            An Important Question
           </Typography>
         </AccordionSummary>
         <AccordionDetails>
          <Typography>
            Lorem ipsit dom pass, kl,sdc, sciezok zpedkpezodkezd pozkedpozkd p,zed.
          </Typography>
         </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon/>}
         >
          <Typography
           variant="h5"
           color={colors.greenAccent[500]}>
            Another Important Question
           </Typography>
         </AccordionSummary>
         <AccordionDetails>
          <Typography>
            Lorem ipsit dom pass, kl,sdc, sciezok zpedkpezodkezd pozkedpozkd p,zed.
          </Typography>
         </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon/>}
         >
          <Typography
           variant="h5"
           color={colors.greenAccent[500]}>
            Your Favorite Question
           </Typography>
         </AccordionSummary>
         <AccordionDetails>
          <Typography>
            Lorem ipsit dom pass, kl,sdc, sciezok zpedkpezodkezd pozkedpozkd p,zed.
          </Typography>
         </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon/>}
         >
          <Typography
           variant="h5"
           color={colors.greenAccent[500]}>
            Some Random Questions
           </Typography>
         </AccordionSummary>
         <AccordionDetails>
          <Typography>
            Lorem ipsit dom pass, kl,sdc, sciezok zpedkpezodkezd pozkedpozkd p,zed.
          </Typography>
         </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon/>}
         >
          <Typography
           variant="h5"
           color={colors.greenAccent[500]}>
            The Final Question
           </Typography>
         </AccordionSummary>
         <AccordionDetails>
          <Typography>
            Lorem ipsit dom pass, kl,sdc, sciezok zpedkpezodkezd pozkedpozkd p,zed.
          </Typography>
         </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Faq