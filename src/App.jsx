import React, { Fragment } from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ClickSpark from "./components/clickSpart";
import TextCursor from "./components/TextCursor";

function App() {
  return (
    <Fragment>
      <TextCursor
        text="s"
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />
      <ClickSpark
        sparkColor="#007bff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </ClickSpark>
    </Fragment>
  );
}

export default App;
