
import Image from "next/image";
import React from "react";
import { Header } from "../components/Header";

import { MainPage } from "../components/MainPage";
import { Skills } from "../components/Skills";
import { Portfilo } from "../components/Portfilio";
import Footer from "../components/Footer";
import About from "../components/About";
import ContactMe from "../components/ContactMe";



export default function Home() {
  return (
    <div >
      <Header/>
      <MainPage/>
      <About/>

      <Skills/>
      <Portfilo/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}
