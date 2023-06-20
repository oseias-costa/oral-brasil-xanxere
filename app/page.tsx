"use client";
import styled from "styled-components"
import Benefits from "./components/benefits/Benefits";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import Treatments from "./components/treatments/Treatments";

export default function Home() {
  return (
    <Container>
      <Header />
      <Headline />
      <Benefits />
      <Treatments />
    </Container>
  )
}

const Container = styled.main`

 
`