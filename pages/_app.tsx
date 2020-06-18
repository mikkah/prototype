import React from "react";
import { withUrqlClient } from "next-urql";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css"

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default withUrqlClient(() => ({ 
  url: process.env.GRAPH_ENDPOINT as string + "/graphql" }))(App);