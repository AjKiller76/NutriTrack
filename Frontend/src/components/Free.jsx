import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";
import list from "../assets/list.json"

function Free() {
    const filterData=list.filter((data)=>data.category==="free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
  <>
    <div className='max-w-screen-2xl container mx-auto md:px-0 px-4'>
        <h1 className='font-semibold text-xl pb-2'>Popular Plans</h1>
        <p>hsejhsv iwrjs iwhsedl is wsjetg 3twlesjr eskdxi jsejtiwehsl posreuwsex jedgj s ietslj xjesioj seji testd 3wjestgej jteije oestjijes </p>
    </div>
    <div className="slider-container">
      <Slider {...settings}>
        {
            filterData.map((item)=>(<Cards item={item} key={item.id}/>))
        }
      </Slider>
    </div>
  </>
  )
}

export default Free