import '../styles/globals.css';

import Head from 'next/head';
import { AppProps } from 'next/app';
import RootLayout from '@/components/Layout';

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>

            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </>
    );
}
