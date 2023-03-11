import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import heroImg from "../images/hero-img.svg";
import { portfolios } from "../PortfolioData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Portfolio from "./Portfolio";

export default function Carousel() {
  return (
    <>
      <div className="swiper-title">
        Take a look at my design portfolio
        <img src={heroImg} alt="" />
      </div>
      <div className="swiper-wrapper">
        <Swiper
          className="swiper-wrapper"
          // install Swiper modules

          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          breakpoints={{
            // when window width is <= 100px
            100: {
              slidesPerView: 1,
            },
            // when window width is <= 991px
            991: {
              slidesPerView: 2,
            },
            // when window width is <= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {portfolios.map((portfolio) => (
            <SwiperSlide>
              <Portfolio
                img={portfolio.img}
                title={portfolio.title}
                text={portfolio.text}
                link={portfolio.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
