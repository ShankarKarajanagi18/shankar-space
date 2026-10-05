import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Rewrite from "../components/Rewrite";
import Estimator from "../components/Estimator";
import Process from "../components/Process";
import About from "../components/About";
import Faq from "../components/Faq";
import Brief from "../components/Brief";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Services />
        <Work />
        <Rewrite />
        <Estimator />
        <Process />
        <About />
        <Faq />
        <Brief />
      </main>
      <Footer />
    </>
  );
}
