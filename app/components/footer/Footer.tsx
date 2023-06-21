import Image from "next/image";
import styled from "styled-components";
import Logo from "@/public/logo-white.svg";
import Location from "@/public/location.png";
import { contact, footer } from "../global/_data";

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
      <BlockRight>
        <div className="BlockRight__Adress">
          <Icon
            src={Location}
            alt="Endereço Clínica Odontológica Oral Brasil Xanxerê SC"
          />
          <p>{contact.contacts.adress.content}</p>
        </div>
      </BlockRight>
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--color-blue-strong);
  display: flex;
  flex-wrap: wrap;
  padding-top: 63px;
  padding-bottom: 63px;
  justify-content: space-around;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 740px) {
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

const A = styled.a`
  margin-left: 40px;
  color: var(--color-white);
  transition: 0.3s linear;
  padding-bottom: 12px;

  &:hover {
    color: var(--color-blue-light);
  }

  @media (max-width: 740px) {
    margin-left: 0px;
  }
`;

const BlockRight = styled.div`
  .BlockRight__Adress {
    display: flex;
    p {
      color: var(--color-white);
      max-width: 350px;
      padding-left: 20px;
    }
  }

  @media (max-width: 740px) {
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
`;

const Icon = styled(Image)``;
