import "./styles.scss";
import React from "react";

const Carousel: React.FunctionComponent = () => {
  return (
    <div id="carouselID" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner h-100 carousel-image">
        <div className="carousel-item active h-100" data-bs-interval={"5000"}>
          <img
            src="/assets/images/home/carousel_1.jpg"
            className="carousel-image"
            alt="Lab Lou foto 1"
          />
        </div>
        <div className="carousel-item h-100" data-bs-interval={"5000"}>
          <img
            src="/assets/images/home/carousel_2.jpg"
            className="carousel-image"
            alt="Lab Lou foto 2"
          />
        </div>
        <div className="carousel-item h-100" data-bs-interval={"5000"}>
          <img
            src="/assets/images/home/carousel_3.jpg"
            className="carousel-image"
            alt="Lab Lou foto 3"
          />
        </div>
        <div className="carousel-item h-100" data-bs-interval={"5000"}>
          <img
            src="/assets/images/home/carousel_4.jpg"
            className="carousel-image"
            alt="Lab Lou foto 4"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselID"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Vorige</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselID"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Volgende</span>
      </button>
    </div>
  );
};
export default Carousel;
