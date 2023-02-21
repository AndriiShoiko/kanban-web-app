import { ThemeContextProvider } from '../store/ThemeContext';

export default function App({ Component, pageProps }) {

    return (
        <ThemeContextProvider>
            <Component {...pageProps} />
        </ThemeContextProvider>
    );
}