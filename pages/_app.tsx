import '../styles/globals.css';
import cookie from 'cookie';
import React, { ReactElement } from 'react';
import App, { AppInitialProps } from 'next/app';
import { AppProvider } from '../components/containers/app/AppProvider';
import { CookieMessage } from '../typescript/interfaces'


type AppProps = {
  authenticated: boolean;
};

class MyApp extends App<AppProps> {
  render(): ReactElement {
    const { Component, pageProps, authenticated } = this.props;
    return (
      <AppProvider authenticated={authenticated}>
        <Component {...pageProps} />
      </AppProvider>
    );
  }
}

MyApp.getInitialProps = async (
  appContext
): Promise<AppInitialProps & AppProps> => {
  let authenticated = false;
  const request = appContext.ctx.req as CookieMessage;
  if (request) {
    request.cookies = cookie.parse(request.headers.cookie || '');
    authenticated = !!request.cookies.session;
  }

  // Call the page's `getInitialProps` and fill `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, authenticated };
};

export default MyApp;