import React from "react";

import {
  AboutUs,
  Chef,
  ContactUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Achievements,
  Menu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Intro />
    <Achievements />
    <Gallery />
    <ContactUs />
    <Footer />
  </div>
);

export default App;
