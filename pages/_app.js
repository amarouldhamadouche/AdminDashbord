import '../styles/globals.css'
import { ColorModeContext, useMode } from '../theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {Layout} from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
     <ThemeProvider theme={theme}>
      <Layout>
       <Component {...pageProps} />
      </Layout> 
       <CssBaseline/>
     </ThemeProvider>
    </ColorModeContext.Provider> 
  )
}

export default MyApp
