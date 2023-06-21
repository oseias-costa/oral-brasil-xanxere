import styled from "styled-components";
import { clinic } from "../global/_data";
import Galery from "./Galery";

export default function Clinic() {
  return (
    <Container id="sobre-a-clinica">
      <h4 className="Clinic__Subtitle">{clinic.subtitle}</h4>
      <h2>{clinic.title}</h2>
      <p className="Clinic__Description">{clinic.description}</p>
      <Galery />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin-top: 60px;
  padding-top: 60px;
  margin-bottom: 60px;
  background-color: var(--color-gray-block);
  padding-left: 20px;
  padding-right: 20px;

  .Clinic__Subtitle {
    text-transform: uppercase;
  }

  .Clinic__Description {
    padding-top: 10px;
    max-width: 700px;
    margin: 0 auto;
  }
`;
