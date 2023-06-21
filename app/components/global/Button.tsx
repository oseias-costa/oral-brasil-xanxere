import styled from "styled-components";
import { whatsAppNum } from "./_data";

export default function Button({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <Container href={whatsAppNum} color={color}>
      {text}
    </Container>
  );
}

const Container = styled("a")<{ color: string }>`
  background: ${(props) => {
    return props.color === "blue"
      ? "var(--color-gradient)"
      : "var(--color-gradient-white)";
  }};
  color: ${(props) => {
    return props.color === "white"
      ? "var(--color-blue-strong)"
      : "var(--color-white)";
  }};
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 22px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    background-color: var(--color-blue-light);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media (max-width: 360px) {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    display: block;
  }
`;
