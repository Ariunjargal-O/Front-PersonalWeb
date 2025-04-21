import { AboutPage } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainPage } from "@/components/MainPage";
import { Portfilo } from "@/components/Portfilio";
import { Skills } from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Header/>
      <MainPage/>
      <AboutPage/>
      <Skills/>
      <Portfilo/>
      <Footer/>
    </div>
  );
}
