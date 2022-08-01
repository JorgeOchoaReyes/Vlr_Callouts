/* eslint-disable require-jsdoc */
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link 
            rel="apple-touch-icon" 
            sizes="180x180" href="/apple-touch-icon.png" />
          <link 
            rel="icon" 
            type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link 
            rel="icon" 
            type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link 
            rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
