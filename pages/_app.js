import "../styles/globals.css";
import "../styles/tailwind.css";
import "katex/dist/katex.css";
import router from "next/router";
import { useEffect } from "react";
import TopNav from '../components/TopNav/TopNav'
import {DarkProvider} from '../components/DarkToggle'
import { ApolloClient, ApolloProvider, gql, useQuery } from "@apollo/client";
import { useApollo, initializeApollo } from "../lib/apolloClient";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      setTimeout(() => {
        if (url.includes("#")) {
          router.push(router.asPath);
        } else {
          window.scrollTo(0, 0);
        }
      }, 300);
    };
    const handleHashChange = (url) => {
      if (!url.includes("#")) {
        window.scrollTo(0, 0);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleHashChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleHashChange);
    };
  }, []);
  return (
    <ApolloProvider client={initializeApollo()}>
      <DarkProvider>
        <div className="dark:bg-black min-h-screen flex flex-col">
          <TopNav className="dark:bg-black shadow-lg" />
          <Component {...pageProps} />
        </div>
      </DarkProvider>
    </ApolloProvider>
  );
}

export default MyApp;
