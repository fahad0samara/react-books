import React, {useEffect, useState} from "react";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination ,Autoplay,Navigation  } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import FatchData  from "./FatchData ";


const HotNews = () => {
  const Datacat = (str, num) => {
    if (str.length > num) {
      return str.substring(0, num) + "...";
    }
    return str;
  }
  const [data,setdata]=useState([]);


  useEffect(() => {
    const check = localStorage.getItem("data2");
    if (check) {
      setdata(JSON.parse(check));
    } else {
      const options = {
        method: 'GET',
        url: 'https://hapi-books.p.rapidapi.com/top/2021',
        headers: {
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
          'X-RapidAPI-Key': 'cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504'
        }
      };

      axios.request(options).then(function (response) {
        localStorage.setItem('data2', JSON.stringify(response.data))
console.log(response.data,'YYY');
        setdata(response.data)

          ;


        ; // save data to local storage
      }).catch(function (error) {
        console.error(error);

      });

    }
  }, []);
 

  return (
    <div className="">
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
     
            {data && data.map((item, index) => {
              return (
                <SwiperSlide>
           
                 
                  <FatchData  className=' ' key={index} item={item}/>
            
                  </SwiperSlide>
              )
              
            
            })}
              
          
          
      
      </div>
      </Swiper>
      
    </div>
  );
};

export default HotNews;