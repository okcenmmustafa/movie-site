// packages
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { store } from "redux/app/store";
import { Provider } from "react-redux";

import TheErrorBoundary from "features/app/TheErrorBoundary";

// content
import "../styles/index.css";

import WithLoader from "components/WithLoader";
import Tapbar from "components/Tapbar";
Tapbar;
function AppMain({ Component, pageProps }) {
  return (
    <TheErrorBoundary>
      <Tapbar />
      <Component {...pageProps} />
    </TheErrorBoundary>
  );
}

const AppWithLoader = WithLoader(AppMain);

export default function App({ Component, pageProps }) {
  const [pageHydrated, setPageHydrated] = useState(false);

  useEffect(() => {
    // Avoid race conditions when load times are extremely fast
    setPageHydrated(document.readyState === "complete");

    // Listens for load event when refreshed page loads are slow
    window.addEventListener("load", () => {
      setPageHydrated(true);
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1, user-scalable=0"
        />
        <meta name="theme-color" content="#1A0A3C" />
        <title>Movies</title>
      </Head>

      <Provider store={store}>
        <AppWithLoader
          Component={Component}
          pageProps={pageProps}
          pageHydrated={pageHydrated}
        />
      </Provider>
    </React.Fragment>
  );
}
