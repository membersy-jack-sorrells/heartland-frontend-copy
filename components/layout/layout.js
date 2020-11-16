import Head from 'next/head';
import { Header } from "./header";
import { Footer } from "./footer";
import { NewFooter } from './newFooter';
import { CloudinaryContext } from "cloudinary-react";

export function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CloudinaryContext cloudName="membersy">
        <Header />

        <main>
          {children}
        </main>

        {/* <NewFooter /> */}
        <Footer />
      </CloudinaryContext>
    </div>
  );
}
