import "../app/globals.css";
import "../app/style.scss";
import { AppProps } from "next/app";
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { Suspense } from "react";
import Head from "next/head"; // Import your authentication context
import Nav from "@/components/navbar";

 export function CircleContainer(){
 return( 
 <div className="container">
    {Array.from({ length: 1000 }, (_, i) => (
      <div key={i} className="circle-container">
        <div className="circle"></div>
      </div>
    ))}
  </div>)
 }



export default function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <Suspense fallback={<Spinner />}>
      <NextUIProvider>
        <div>
          <Head>
            {/* Define metadata for the app */}
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>GetLinked</title>
            <link
              rel="icon"
              href="https://res.cloudinary.com/dg0kdnwt1/image/upload/v1695323747/anxidsihijqqqwzspub7.svg"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
              rel="stylesheet"
              type="text/css"
            ></link>
          </Head>
        
          
          <Nav />
          <div className="z-20 relative">

          <Component {...pageProps} />
          </div>
          <CircleContainer/>
        </div>
      </NextUIProvider>
    </Suspense>
  );
}
