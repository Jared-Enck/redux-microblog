import { Roboto } from 'next/font/google';
import './globals.css';
const roboto = Roboto({ weight: '400', subsets: ['latin'] });
import Navbar from './components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';

export const metadata = {
  title: 'Redux Microblog',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
