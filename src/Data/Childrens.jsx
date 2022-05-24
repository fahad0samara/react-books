import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";
const Data = () => {
   
     const [data, setdata] = useState([]);
       const [expanded, setExpanded] = useState(false);
       const dataForDisplay = expanded ? data : data.slice(0, 6);
       const Datacat = (str, num) => {
        if (str.length > num) {
          return str.substring(0, num) + "...";
        }
        return str;
      };
useEffect(() => {
 
  const options = {
    method: 'GET',
    url: 'https://best-childrens-books.p.rapidapi.com/books/timegoodreads',
    headers: {
      'X-RapidAPI-Host': 'best-childrens-books.p.rapidapi.com',
      'X-RapidAPI-Key': 'cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    setdata(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  
}, []);

  return (
    <div className=''>
     
    <h1 className=" text-center font-extrabold text-4xl">
    Review of the best books for children
    </h1>
    <div class="py-6 grid md:grid-cols-2 gap-10 m-20">
      {dataForDisplay.map((item, index) => {
        return (
          <div>
            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          
              <div class="w-2/3 p-4">
                <h1 class="text-gray-900 font-bold text-2xl">
                  {item.title}
                </h1>
                <p class="mt-2 text-gray-600 text-sm">
                {item.source}
                </p>
                <div class="flex item-center mt-2">
                  <svg
                    class="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    class="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    class="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    class="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    class="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <div class="flex item-center justify-between mt-3">
                  <h1 class="text-gray-700 font-bold text-xl">
                    {item.name}
                  </h1>
                  <a class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" href={item.url}>click</a> 
       
                </div>
              </div>
            </div>
          </div>
        );
      })}
     <div class={' md:mx-60'}>

     <button
        className={' bg-[#facc15] hover:bg-red-500 rounded-3xl  md:ml-60   drop-shadow-2xl text-center font-black text-2xl w-40 h-20  '}
        type="button"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "show More"}
      </button>
     </div>
    </div>
  </div>
  )
}

export default Data