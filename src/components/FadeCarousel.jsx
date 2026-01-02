import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../styles/fade.css";
import "swiper/css";
import "swiper/css/autoplay";


import img1 from "../images/b1.jpg";
import img2 from "../images/b2.jpg";
import img3 from "../images/b3.jpg";
import img4 from "../images/b5.jpg";
import img5 from "../images/b4.jpg";


import img6 from "../images/g1.jpg";
import img7 from "../images/g2.jpg";
import img8 from "../images/g4.jpg";
import img9 from "../images/g6.jpg";
import img10 from "../images/g7.jpg";


import img11 from "../images/s1.jpg";
import img12 from "../images/s2.jpg";
import img13 from "../images/s3.jpg";
import img14 from "../images/s4.jpg";
import img15 from "../images/s5.jpg";



export default function MyCarousel() {

  const briskettexts = [
  "Our brisket is slow-smoked for hours to achieve deep, rich flavor.",
  "Hand-trimmed cuts cooked low and slow for perfect tenderness.",
  "Seasoned with a bold rub and smoked over real wood — no shortcuts.",
  "Taste the smoke, fire, and craft in every bite.",
  "Crafted with patience, served with pride."
];




 const gravyTexts = [
  "Our gravy is simmered slowly for deep, rich flavor and smooth texture.",
  "Made from real drippings, stock, and herbs — no artificial shortcuts.",
  "Savory, velvety, and perfectly balanced to complement every cut.",
  "Slow-cooked to achieve that bold, comforting depth everyone loves.",
  "A house-crafted recipe poured hot with patience, pride, and fire."
];


const steakTexts = [
  "Our steaks are hand-selected and seasoned to bring out bold, natural flavor.",
  "Seared over high heat to lock in juices and create a perfect crust.",
  "Rested properly for tenderness, then sliced to showcase rich marbling.",
  "Every bite delivers deep char, smoky heat, and steakhouse tradition.",
  "Finished with butter, herbs, and fire — the true soul of great steak."
];



  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="wholepage">

        
      <div className="carousel-row">

        <Swiper
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setIndex(swiper.realIndex)}
          className="mySwiper"
        >
          <SwiperSlide><img src={img1} /></SwiperSlide>
          <SwiperSlide><img src={img2} /></SwiperSlide>
          <SwiperSlide><img src={img3} /></SwiperSlide>
          <SwiperSlide><img src={img4} /></SwiperSlide>
          <SwiperSlide><img src={img5} /></SwiperSlide>
        </Swiper>

        <div className="fade-text-box">
          <p>{briskettexts[index]}</p>
        </div>

      </div>



      <div className="carousel-row">

        <Swiper
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setIndex(swiper.realIndex)}
          className="mySwiper"
        >
          <SwiperSlide><img src={img6} /></SwiperSlide>
          <SwiperSlide><img src={img7} /></SwiperSlide>
          <SwiperSlide><img src={img8} /></SwiperSlide>
          <SwiperSlide><img src={img9} /></SwiperSlide>
          <SwiperSlide><img src={img10} /></SwiperSlide>
        </Swiper>

        <div className="fade-text-box">
          <p>{ gravyTexts[index]}</p>
        </div>

      </div>



      <div className="carousel-row">

        <Swiper
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setIndex(swiper.realIndex)}
          className="mySwiper"
        >
          <SwiperSlide><img src={img11} /></SwiperSlide>
          <SwiperSlide><img src={img12} /></SwiperSlide>
          <SwiperSlide><img src={img13} /></SwiperSlide>
          <SwiperSlide><img src={img14} /></SwiperSlide>
          <SwiperSlide><img src={img15} /></SwiperSlide>
        </Swiper>

        <div className="fade-text-box">
          <p>{ steakTexts[index]}</p>
        </div>

      </div>



      </div>
    </>
  );
}
