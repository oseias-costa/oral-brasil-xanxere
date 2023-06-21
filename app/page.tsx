"use client";
import styled from "styled-components";
import Benefits from "./components/benefits/Benefits";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import Treatments from "./components/treatments/Treatments";
import Clinic from "./components/clinic/Clinic";
import Schedule from "./components/schedule/Schedule";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/whatsapp/Whatsapp";

export default function Home() {
  return (
    <Container>
      <Whatsapp />
      <Header />
      <Headline />
      <Benefits />
      <Treatments />
      <Clinic />
      <Schedule />
      <Contact />
      <Footer />
    </Container>
  );
}

const Container = styled.main``;
