import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CTB Foundation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="CTB Foundation" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
