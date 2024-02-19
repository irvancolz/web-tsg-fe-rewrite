import React, { ReactNode } from "react";
import "./globals.scss";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/icon_tsg.png" type="image/x-icon" />
        <link rel="icon" sizes="16x16" href="/icon_tsg.png" />
        <title>PT Tristar Surya Gemilang</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
