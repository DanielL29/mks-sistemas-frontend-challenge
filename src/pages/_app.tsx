import type { AppProps } from "next/app";
import "../assets/styles/global.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store()}>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
