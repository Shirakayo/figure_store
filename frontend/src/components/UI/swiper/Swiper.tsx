import React from "react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "../../../utils/const";

const MySwiper: React.FC = React.memo(() => {
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      spaceBetween={-750}
      slidesPerView={1.5}
      centeredSlides={true}
      speed={600}
      autoplay={{
        delay: 3000,
      }}
      loop={true}
      className={style.swiper}
      pagination={{
        el: '.my-custom-pagination-div',
        clickable: true,
        renderBullet: (index, className) => {
          // eslint-disable-next-line no-useless-concat
          return '<span class="' + className + '">' + "</span>";
        },
      }}
    >
      <SwiperSlide className={style.swiper_content}>
        <NavLink to={HOME_ROUTE}>
          <img
              className={style.swiper_image}
              src="https://img.amiami.com/images/b/large/comasahiserizawa750250.jpg"
              alt=""
          />
        </NavLink>
      </SwiperSlide>
      <SwiperSlide className={style.swiper_content}>
        <NavLink to={HOME_ROUTE}>
          <img
              className={style.swiper_image}
              src="https://img.amiami.com/images/b/large/comjavelin750250.jpg"
              alt=""
          />
        </NavLink>
      </SwiperSlide>
      <SwiperSlide className={style.swiper_content}>
        <NavLink to={HOME_ROUTE}>
          <img
              className={style.swiper_image}
              src="https://img.amiami.com/images/b/large/amicowarainakubanneren.jpg"
              alt=""
          />
        </NavLink>

      </SwiperSlide>
      <SwiperSlide className={style.swiper_content}>
        <a href="https://amicamp.jp/en/top-page/?utm_source=amiami&utm_medium=BannerCom&utm_campaign=202207WF&page=3095" target="_blank" rel="noreferrer">
          <img
              className={style.swiper_image}
              src="https://img.amiami.com/images/b/large/amiamihobbycamp2022en2.jpg"
              alt=""
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
});



export default MySwiper;
