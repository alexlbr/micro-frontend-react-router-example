import type { AppProps } from "next/app";
import React from "react";
import Link from "next/link";

import { createRuntime, HostProvider } from "../libs/runtime";

const runtime = createRuntime();

const App = ({ Component, pageProps }: AppProps) => (
  <HostProvider runtime={runtime}>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/react-router-1-sub-pages">React Router 1</Link>
      </li>
      <li>
        <Link href="/react-router-2-sub-pages">React Router 2</Link>
      </li>
    </ul>
    <Component {...pageProps} />
  </HostProvider>
);

// eslint-disable-next-line import/no-default-export
export default App;
