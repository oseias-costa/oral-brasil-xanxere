import styled from "styled-components";
import Img1 from "@/public/img1.png";
import Img2 from "@/public/img2.png";
import Image from "next/image";

export default function Galery() {
  return (
    <Container>
      <Img src={Img1} alt="" />
      <Img src={Img2} alt="" />
    </Container>
  );
}

const Container = styled.section`
  padding-top: 40px;
`;

const Img = styled(Image)`
  margin: 5px;

  @media (max-width: 740px) {
    object-fit: cover;
    width: 100%;
    margin: 0px;
  }
`;
