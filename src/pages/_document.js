/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {" "}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
