import React from 'react';
import { ThemeContextProvider } from '../store/ThemeContext';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps }) {
    return (
        <ThemeContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContextProvider>
    );
}