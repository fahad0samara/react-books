import React, {useEffect, useState} from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";

// Import Swiper styles


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";;
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FatchData  from "./FatchData ";


const HotNews = () => {
  const Datacat = (str, num) => {
    if (str.length > num) {
      return str.substring(0, num) + "...";
    }
    return str;
  }
  const [data,setdata]=useState([]);
  const [expanded, setExpanded] = useState(false);
  const dataForDisplay = expanded ? data : data.slice(0, 4);

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
     
     <div className="grid grid-cols-1 md:grid-cols-2   m-5 gap-14">
     
        
            {dataForDisplay && dataForDisplay.map((item, index) => {
              return (

           
                 
                  <FatchData  className=' ' key={index} item={item}/>
            
              
              )
            
            
            })}
           <button
          className="bn47 md:ml-60   drop-shadow-2xl text-center font-black text-2xl w-40 h-20  m-10 "
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "show More"}
        </button>
          
      
      </div>
    
    </div>
  );
};

export default HotNews;