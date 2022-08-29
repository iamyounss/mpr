import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

function Document() {
    return (
      <Html>
        <Head />
        <body 
        className="bg-white text-black dark:bg-slate-800 dark:text-slate-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );

}

export default Document;