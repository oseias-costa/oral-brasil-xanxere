import Image from "next/image";
import styled from "styled-components";
import Logo from "@/public/logo-white.png";
import { footer } from "../global/_data";

export default function Footer() {
  const menuItems = footer.menu.map((item) => {
    return (
      <A href={item.link} key={item.text}>
        {item.text}
      </A>
    );
  });

  return (
    <Container>
      <Image src={Logo} alt="Clínica de Odontologia em Xanxerê/SC" />
      <Menu>{menuItems}</Menu>
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--color-blue-strong);
  display: flex;
  flex-wrap: wrap;
  padding-top: 63px;
  padding-bottom: 63px;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const A = styled.a`
  margin-left: 40px;
  color: var(--color-white);
  transition: 0.3s linear;
  padding-bottom: 12px;

  &:hover {
    color: var(--color-blue-light);
  }
`;
