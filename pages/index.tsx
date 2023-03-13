import Head from "next/head";
import Image from "next/image";
import { Hero, Projects, Skills, About, Contact, Footer } from "../components/";
import styles from "@/styles/Home.module.css";
import { projects } from "@/Datas";

export default function Home() {
  return (
    <>
      <Head>
        <title>portfolio</title>
        <meta name="description" content="mohammad zeyghami portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
