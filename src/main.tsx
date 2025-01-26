import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(<Main />)
