import React from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Progress from "./components/Progress";
import About from "./components/About";
import Modal from "./components/Modal";
import ModalComplete from "./components/ModalComplete";
import { AppProvider } from "./context/context";

const App = () => {
  return (
    <AppProvider>
      <Hero />
      <Menu />
      <Intro />
      <Progress />
      <ModalComplete />
      <Modal />
      <About />
    </AppProvider>
  );
};

export default App;
