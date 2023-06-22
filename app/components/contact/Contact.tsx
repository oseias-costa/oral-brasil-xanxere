import Image from "next/image";
import styled from "styled-components";
import Zeze from "@/public/contact.png";
import { contact } from "../global/_data";

export default function Contact() {
  return (
    <>
      <Container id="contato">
        <Contacts>
          <h4>{contact.subtitle}</h4>
          <h2>{contact.title}</h2>
          <ContactItem>
            <Icon
              src={contact.contacts.adress.icon}
              alt="Endereço Clínica de Odontológica Oral Brasil Xanxerê/SC"
            />
            <div>
              <h4 className="Contact__Title">{contact.contacts.adress.item}</h4>
              <p className="Contact__Content">
                {contact.contacts.adress.content}
              </p>
            </div>
          </ContactItem>
          <ContactItem>
            <Icon
              src={contact.contacts.phone.icon}
              alt="Endereço Clínica de Odontológica Oral Brasil Xanxerê/SC"
            />
            <div>
              <h4 className="Contact__Title">{contact.contacts.phone.item}</h4>
              <p className="Contact__Content-phone">
                {contact.contacts.phone.content}
              </p>
            </div>
          </ContactItem>
        </Contacts>
        <Img
          src={Zeze}
          alt="Clínica Odontológica Oral Brasil na cidade de Xanxerê"
        />
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.799035982935!2d-52.40732906070909!3d-26.87812529185563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4c3cab7bcfddd%3A0x7456a97d37330353!2sR.%20Rui%20Barbosa%2C%20226%20-%20Centro%2C%20Xanxer%C3%AA%20-%20SC%2C%2089820-000!5e0!3m2!1spt-BR!2sbr!4v1687291999325!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        loading="lazy"
        style={{ padding: "20px", paddingTop: "0px" }}
      ></iframe>
    </>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 63px;
`;

const Contacts = styled.div`
  padding-top: 60px;
  @media (max-width: 740px) {
    padding-top: 0px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  padding-top: 30px;

  div {
    padding-left: 20px;
  }

  .Contact__Content {
    max-width: 300px;
    padding-top: 10px;
  }

  .Contact__Content-phone {
    font-size: 22px;
    padding-top: 10px;
  }
`;

const Img = styled(Image)`
  @media (max-width: 740px) {
    object-fit: cover;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Icon = styled(Image)``;
