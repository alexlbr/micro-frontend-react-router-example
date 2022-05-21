import type { AppProps } from "next/app";
import React from "react";

import { createRuntime, HostProvider } from "../libs/runtime";

const runtime = createRuntime();

const App = ({ Component, pageProps }: AppProps) => (
  <HostProvider runtime={runtime}>
    <Component {...pageProps} />
  </HostProvider>
);

// eslint-disable-next-line import/no-default-export
export default App;
