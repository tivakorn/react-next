// Libs
import React from 'react'
import App, { Container } from "next/app"
import Head from 'next/head'
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper"

// Store
import createReduxStore from '../src/components/store'

const ReduxStore = (initialState, options) => createReduxStore(initialState, options)

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {

        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props

        return (
            <Container>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device, initial-scale=1, shrink-to-fit=no' />

                    <link rel="stylesheet" href="https://unpkg.com/nes.css@2.2.1/css/nes.min.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P" />
                </Head>

                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>

            </Container>
        )
    }
}

export default withRedux(ReduxStore)(MyApp)