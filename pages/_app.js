import '@/styles/globals.scss';
import Layout from '@/components/layout/Layout';
import { Provider } from 'react-redux';
import store from '@/store';
import Head from 'next/head';

export default function App({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <Layout>
                <Head>
                    <title>Kickstop</title>
                </Head>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};