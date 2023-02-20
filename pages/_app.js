import { ThemeContextProvider } from '../store/ThemeContext';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../styles/Theme";

export default function App({ Component, pageProps }) {

    return (
        <ThemeContextProvider>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ThemeContextProvider>
    );
}