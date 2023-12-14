import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/swiper.css";

function SwiperComponent() {
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
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroup={3}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            992: {
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
                <img src="/electronics/camera.webp" />
              <div className="slide-image-caption sm-font">
                Camera
              </div>
              <div className="slide-image-description sm-font">
                description
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/keyboard">
                <img src="/electronics/keyboard.webp" />
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
                <img src="/electronics/camera.webp" />
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
                <img src="/electronics/keyboard.webp" />
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
                <img src="/electronics/camera.webp" />
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
                <img src="/electronics/keyboard.webp" />
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
                <img src="/electronics/camera.webp" />
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
                <img src="/electronics/keyboard.webp" />
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
                <img src="/electronics/camera.webp" />
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
                <img src="/electronics/keyboard.webp" />
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
                <img src="/electronics/camera.webp" />
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
                <img src="/electronics/keyboard.webp" />
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
                <img src="/electronics/camera.webp" />
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
                <img src="/electronics/keyboard.webp" />
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
                <img src="/electronics/camera.webp" />
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
                <img src="/electronics/keyboard.webp" />
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
                <img src="/electronics/camera.webp" />
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
                <img src="/electronics/keyboard.webp" />
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
                <img src="/electronics/camera.webp" />
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
                <img src="/electronics/keyboard.webp" />
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

export default SwiperComponent;