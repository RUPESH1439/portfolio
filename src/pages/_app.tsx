import '../styles/globals.css';

import Head from 'next/head';
import { AppProps } from 'next/app';
import { Courier_Prime } from 'next/font/google';
import RootLayout from '@/components/Layout';

const courier = Courier_Prime({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    variable: '--font-courier',
    display: 'swap',
});

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <title>Rupesh Shrestha, AI-enabled full-stack engineer</title>
                <meta
                    name="description"
                    content="Rupesh Shrestha is an AI-enabled full-stack engineer who builds web and mobile apps end to end with TypeScript, React, React Native and Node.js, working with coding agents like Claude Code and Cursor."
                />
                <meta name="theme-color" content="#080010" />
            </Head>

            <div className={`${courier.variable} type-body`}>
                <RootLayout>
                    <Component {...pageProps} />
                </RootLayout>
            </div>
        </>
    );
}
