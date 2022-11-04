import type { AppProps } from "next/app";
// note: this ensures various parts of next.js are imported and "used" somewhere
//   so that they wont be tree shaken out
import "@module-federation/nextjs-mf/src/include-defaults";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
