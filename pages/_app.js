import React from 'react';
import Head from "next/head";
import { ThemeContextProvider } from '../store/ThemeContext';
import { Layout } from '../components/Layout/Layout';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <ThemeContextProvider>
            <Layout>
                <Head>
                    <title>kanban-web-app</title>
                </Head>
                <Component {...pageProps} />
            </Layout>
        </ThemeContextProvider>
    );
}