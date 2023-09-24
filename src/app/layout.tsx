import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";
import NextTopLoader from "nextjs-toploader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`,
  ),
  title: "Soothe - Bring Calm to Your Discord!",
  description: "Soothe is a multi-purpose music bot ready to skill up and boost up your Discord server's voice activity..",
  icons: ["/logo.png"],
  themeColor: "#666666",
  openGraph: {
    type: "website",
    images: ["/soothe.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta itemProp="thumbnailUrl" content="/soothe.png" />
        <meta itemProp="image" content="/soothe.png" />
        <meta itemProp="imageUrl" content="/soothe.png" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-400`}>
        <NextTopLoader color="#666666" showSpinner={false} />
        <Navbar />
        {children}
        <Footer commitSha={process.env.VERCEL_GIT_COMMIT_SHA} />
        <Analytics />
      </body>
    </html>
  );
}
