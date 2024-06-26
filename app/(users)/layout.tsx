import "../globals.css";
import "../globalicon.css";
import React from "react";
import { Nav } from "@/components/nav";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On The Way - Podcasts",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/flr7hfx.css"
        ></link>
      </head>
      <body className="w-full h-full dark:bg-darkbg-900">
        <Nav />

        <div className="md:p-0 md:py-4">{children}</div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
