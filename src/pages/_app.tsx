import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import Head from "next/head";
import { GlobalStyle } from "../assets/styles/GlobalCSS";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store()}>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
