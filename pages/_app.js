import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

import { Layout } from '../components/Layout';
import { ThemeContextProvider } from '../store/ThemeContext';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, ...props }) {

    const { emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <ThemeContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeContextProvider>
        </CacheProvider>
    );
}