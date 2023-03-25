import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";

import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zolvebiz</title>
        <meta
          name="description"
          content="Zolvebiz - Partnering for your business growth"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Banner />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
