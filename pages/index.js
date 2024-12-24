import Head from "next/head";
import Nav from "../components/nav";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Services from "../components/services";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Shivaprasad K|Data Scientist</title>
        <meta
          name="description"
          content="hello i am Shivaprasad K, aspiring Data Scientist, I am from mangalore,karnataka"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
