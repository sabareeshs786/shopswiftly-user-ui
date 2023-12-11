import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/styles.css";

export default function App() {
  return (
    <>
      <div className="swiper-block">
        <Link to="/electronics-more">
          <div className="swiper-title">
            <div className="swiper-title-text">
              Electronics
            </div>
            <div className="show-more">
              show more
            </div>
          </div>
        </Link>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroup={4}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          navigation={true}

          spaceBetween={10}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >

          <SwiperSlide>
            <Link to="/camera">
              <div className="slide-image-container">
                <img src="/electronics/camera.webp" />
              </div>
              <div className="slide-image-caption sm-font">
                caption
              </div>
              <div className="slide-image-description sm-font">
                description
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/keyboard">
              <div className="slide-image-container">
                <img src="/electronics/keyboard.webp" />
              </div>
              <div className="slide-image-caption sm-font">
                caption
              </div>
              <div className="slide-image-description sm-font">
                description
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/camera">
              <div className="slide-image-container">
                <img src="/electronics/camera.webp" />
              </div>
              <div className="slide-image-caption sm-font">
                caption
              </div>
              <div className="slide-image-description sm-font">
                description
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/keyboard">
              <div className="slide-image-container">
                <img src="/electronics/keyboard.webp" />
              </div>
              <div className="slide-image-caption sm-font">
                caption
              </div>
              <div className="slide-image-description sm-font">
                description
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  );
}