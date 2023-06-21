import Image from "next/image";
import styled from "styled-components";
import { benefits } from "../global/_data";

type Benefits = {
  icon: string;
  text: string;
};

export default function Benefits() {
  const benefitsBlock = benefits.map((item) => {
    return (
      <Benefit key={item.text}>
        <Icon src={item.icon} alt={item.text} />
        <Description>{item.text}</Description>
      </Benefit>
    );
  });
  return <Container>{benefitsBlock}</Container>;
}

const Container = styled.section`
  background-color: var(--color-gray-block);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 110px;
  padding-left: 110px;

  @media (max-width: 740px) {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const Description = styled.p`
  text-transform: uppercase;
  max-width: 120px;
  padding-left: 30px;
  @media (max-width: 740px) {
    max-width: 150px;
  }
`;

const Icon = styled(Image)`
  @media (max-width: 740px) {
    height: 48px;
    width: 48px;
  }
`;
