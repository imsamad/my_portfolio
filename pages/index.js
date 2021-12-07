import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
import Services from "../components/Services";
import Header from "../components/Header";

import data from "../lib/data";

export default function About({ data }) {
  return (
    <>
      <Header />
      <Home intro={data.intro} />
      <Skills skills={data.skills} />
      <Services services={data.services} />

      <Projects projects={data.projects} />
      <Contact contact={data.contact} />
      <Copyright copyright={data.copyright} />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: { data },
  };
};
