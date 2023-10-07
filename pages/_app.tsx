import "../app/globals.css";
import { AppProps } from "next/app";
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { Suspense } from "react";
import Head from "next/head";// Import your authentication context
import Nav from "@/components/navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<Spinner />}>
      <NextUIProvider>
          <div>
            <Head>
              {/* Define metadata for the app */}
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>GetLinked</title>
              <link
                rel="icon"
                href="https://res.cloudinary.com/dg0kdnwt1/image/upload/v1695323747/anxidsihijqqqwzspub7.svg"
              />
            </Head>
            <Nav/>
            <Component {...pageProps} />
          </div>
      </NextUIProvider>
    </Suspense>
  );
}
