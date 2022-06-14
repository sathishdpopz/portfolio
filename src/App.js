import React from "react";
import "./App.scss";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Section from "./Components/Section/Section";
import Skill from "./Components/Skills/Skill";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
