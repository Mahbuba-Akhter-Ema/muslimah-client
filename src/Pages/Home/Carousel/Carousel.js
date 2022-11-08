import React from 'react';
import carousel1 from '../../../images/carousel-4.jpg';
import carousel2 from '../../../images/carousel-1.jpg';
import carousel3 from '../../../images/carousel-2.jpg';
import carousel4 from '../../../images/carousel-3.png';

const Carousel = () => {
    return (
        <div className="carousel w-full mt-10 rounded">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={carousel1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle text-teal-400 hover:text-teal-700">❮</a> 
      <a href="#slide2" className="btn btn-circle text-teal-400 hover:text-teal-700">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={carousel2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle text-teal-400 hover:text-teal-700">❮</a> 
      <a href="#slide3" className="btn btn-circle text-teal-400 hover:text-teal-700">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={carousel3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle text-teal-400 hover:text-teal-700">❮</a> 
      <a href="#slide4" className="btn btn-circle text-teal-400 hover:text-teal-700">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={carousel4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle text-teal-400 hover:text-teal-700">❮</a> 
      <a href="#slide1" className="btn btn-circle text-teal-400 hover:text-teal-700">❯</a>
    </div>
  </div>
</div>
    );
};

export default Carousel;