import React, {useState,useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";
import axios from 'axios';

function Free() {
  const[diet,setDiet]=useState([])
  useEffect(()=>{
    const getDiet=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/diet")
        console.log(res.data)
        setDiet(res.data.filter((data)=>data.category==="free"))
      }catch(error){
        console.log(error)
      }
    }
    getDiet();
  },[])
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
        
    </div>
    <div className="slider-container">
      <Slider {...settings}>
        {
            diet.map((item)=>(<Cards item={item} key={item.id}/>))
        }
      </Slider>
      <p className='pt-5'>Whether you're looking to lose weight, gain muscle, or simply maintain a balanced and healthy lifestyle, our popular diet plans have you covered. Choose from a variety of meal options, designed by nutrition experts to fit your individual needs and preferences. Our plans focus on nutrient-dense, delicious meals that help you reach your health goals while enjoying what you eat. Explore personalized options and discover the perfect plan that aligns with your fitness and wellness journey.
           </p>
    </div>
  </>
  )
}

export default Free