import React, {useEffect, useState} from "react";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination ,Autoplay,Navigation  } from "swiper";
import {FcLike } from 'react-icons/fc'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Fatch from "./Fatch";
const Data = () => {
   
     const [data, setdata] = useState([]);
      
  
useEffect(() => {
 
  const options = {
    method: 'GET',
    url: 'https://hapi-books.p.rapidapi.com/nominees/romance/2020',
    headers: {
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
      'X-RapidAPI-Key': 'cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data,'FFF');
  setdata(response.data)
  }).catch(function (error) {
    console.error(error);
  });
  
}, []);

  return (
    
    <div >
      <div className=" text-center font-black text-4xl flex mb-12 items-center space-x-4 md:ml-52 ">
      <FcLike size='40'/>
      <h1 className=" text-center" >
      
        Browse the books with the most votes</h1>
      </div>
    
    <Swiper
      autoplay={{
       delay: 2500,
       disableOnInteraction: false,
     }}
       effect={"coverflow"}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={"auto"}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={true}
       modules={[EffectCoverflow, Pagination,Autoplay, Navigation ]}
       className="mySwiper"
     >
       
    <div className="">
    
           { data.map((item, index) => {
             return (
               <SwiperSlide>
          
                
                 <Fatch  className=' ' key={index} item={item}/>
           
                 </SwiperSlide>
             )
             
           
           })}
             
         
         
     
     </div>
     </Swiper>
     
   </div>
  )
}

export default Data