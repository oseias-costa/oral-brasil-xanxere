import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { photos } from "./data-images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-styles.css";

export default function Galery() {
  const renderPhotos = photos.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <Img src={item.image} alt={item.alt} />
        <Img src={item.image2} alt={item.alt2} />
      </SwiperSlide>
    );
  });

  return (
    <Container>
      <Swiper
        speed={600}
        cssMode={false}
        navigation={true}
        pagination={true}
        mousewheel={true}
        modules={[Navigation, Pagination, Keyboard, Mousewheel]}
      >
        {renderPhotos}
      </Swiper>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 40px;
`;

const Img = styled(Image)`
  width: 531px;
  height: 300px;
  margin: 5px;

  @media (max-width: 740px) {
    object-fit: cover;
    width: 318px;
    height: 180px;
  }
`;
