"use client";
import styled from "styled-components"
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";

export default function Home() {
  return (
    <Container>
      <Header />
      <Headline />
    </Container>
  )
}

const Container = styled.main`

 
`