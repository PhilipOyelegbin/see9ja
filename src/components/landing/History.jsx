import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {historyData} from '../Data'

const History = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 500,
    cssEase: "linear",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
        }
      }
    ]
  };

  // function to control the slide to the next slide
  function NextArrow({className, style, onClick}) {
    return (
      <div className={className}
      style={{ ...style, disply: "block", background: "green"}} onClick={onClick}/>
    );
  }

  // function to control the slide to the previous slide
  function PrevArrow({className, style, onClick}) {
    return (
      <div className={className}
      style={{ ...style, disply: "block", background: "green"}} onClick={onClick}/>
    );
  }

  return (
    <section className='w-5/6 md:w-11/12 mt-5 mx-auto'>
      <h2 className='w-fit border-b border-green text-2xl text-center mx-auto'>Discover Historical Sites</h2>
      <div className='h-[400px]'>
        <Slider {...settings}>
          {historyData.map((obj) => {
            return (
              <div className="card" key={obj.title}>
                <h2 className="text-xl text-center">{obj.title || ""}</h2>
                <h3 className="text-lg text-center">{obj.subtitle || ""}</h3>
                <img src={obj.image || ""} className="w-full h-48 rounded-lg" alt="image" />
                <p className="text-sm text-left mb-3">{obj.description || ""}</p>
                <a className="btn" href={obj.cardBtn}>Read More</a>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default History