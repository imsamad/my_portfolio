import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
import Services from "../components/Services";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Services />

      <Projects />
      <Contact />
      <Copyright />
    </>
  );
}
