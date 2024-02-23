import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ArticlesProvider } from './data/ArticlesContext';
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Sidebar from './components/Sidebar';
import Blog from './components/Blog';
import Header from './components/Header'


const App = () => {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#4a148c',
      },
      background: {
        default: '#333',
      },
    },
  })

  return (
    <ArticlesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg' sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', padding: '24px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Header />
            </Grid>
            <Grid item xs={false} md={8} />
            {/* Content Row */}
            <Grid item container spacing={2}>
              <Grid item xs={12} md={4}>
                <Sidebar />
              </Grid>
              <Grid item xs={12} md={8}>
                <Blog />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </ArticlesProvider>
  )
}
export default App