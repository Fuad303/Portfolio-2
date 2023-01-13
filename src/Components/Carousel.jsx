import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import memeImg from '../images/meme-generator.png'
import wasteImg from '../images/waste-money.png'
import encryptionImg from '../images/encryption.png'
import dentistImg from '../images/dentist.png'
import heroImg from '../images/hero-img.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Carousel() {
  return (
    <>
    <div className="swiper-title">
      Take a look at my design portfolio
      <img src={heroImg} alt="" />
    </div>
    <div className="swiper-wrapper">
    <Swiper className='swiper-wrapper'
      // install Swiper modules
      
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      breakpoints={{
        // when window width is <= 100px
        100: {
          slidesPerView: 1
        },
        // when window width is <= 991px
        991: {
          slidesPerView: 2
        },
        // when window width is <= 1200px
        1200: {
          slidesPerView: 3
        }
      }}
    >
      <SwiperSlide className="swiper-item">
        <div className="item-img">
            <img src={memeImg} alt="meme-img" />
        </div>
        <div className="carousel-title">Meme generator</div>
        <div className="carousel-text">
          <p>
          A meme generator website allows users to create 
          and share their own memes by providing a library of 
          popular meme templates, along with the ability 
          to add custom text and images.
          </p>
          
        </div>
        <a href='https://random-meme.netlify.app' className="carousel-link">Get to details <ion-icon name="arrow-forward-outline"></ion-icon></a>
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <div className="item-img">
            <img src={wasteImg} alt="waste-money-img" />
        </div>
        <div className="carousel-title">Waste Money</div>
        <div className="carousel-text">
          <p>
          A simple waste money website would allow users to 
          input their spending habits and budget, then 
          provide suggestions on where they can cut back 
          or optimize their spending in order to save money.
          </p>
        </div>
        <a href='https://waste-money.netlify.app' className="carousel-link">Get to details <ion-icon name="arrow-forward-outline"></ion-icon></a>
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <div className="item-img">
            <img src={encryptionImg} alt="encryption-img" />
        </div>
        <div className="carousel-title">Encryption System</div>
        <div className="carousel-text">
          <p>
          An encryption website that supports base-32, 
          Caesar, and reverse encryption methods would 
          allow users to securely encode their text 
          messages or files using a variety of different 
          techniques.
          </p>
        </div>
        <a href='http://encryption.cf/' className="carousel-link">Get to details <ion-icon name="arrow-forward-outline"></ion-icon></a>
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <div className="item-img">
            <img src={dentistImg} alt="dentist-img" />
        </div>
        <div className="carousel-title">Dentist Website</div>
        <div className="carousel-text">
          <p>
          A dentist website is a website that provides 
          information about a dental practice and 
          the services they offer. 
          </p>
        </div>
        <a href='https://saaf.netlify.app' className="carousel-link">Get to details <ion-icon name="arrow-forward-outline"></ion-icon></a>
      </SwiperSlide>
    </Swiper>
    </div>
    </>
  );
};