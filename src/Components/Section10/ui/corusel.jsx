import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.css";

export default function Corusel({ data }) {
  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={80}
      totalSlides={5}
      visibleSlides={1.3}
      currentSlide={2}
      infinite={true}
    >
      <Slider id="corusel">
        {data.map((item, i) => (
          <Slide index={i} key={i} className="sll">
            <img
              src={`https://drenix-back.herokuapp.com/static/media/${item.img}`}
              alt=""
              style={{ width: "90px", height: "90px" }}
            />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}
