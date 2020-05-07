import * as React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "../utils/ThemeContext";
import { Layout } from "../components/Layout";
import { GlobalStyles } from "../utils/GlobalStyles";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
