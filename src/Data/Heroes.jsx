import  { useEffect, useState } from 'react'
import axios from "axios";
import '../App.css'
const Heroes = () => {
const [data,setdata]=useState([]);
 const [expanded, setExpanded] = useState(false);
 const dataForDisplay = expanded ? data : data.slice(0, 6);
    useEffect((
    
    ) => {
        
        const options = {
            method: 'GET',
            url: 'https://superhero-search.p.rapidapi.com/api/heroes',
            headers: {
                'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
                'X-RapidAPI-Key': 'cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data,'ppp');
            setdata(response.data);
        }).catch(function (error) {
            console.error(error);
        });

}
, [])
  return (
    <div class='gradient'>
      <h1 className=' text-4xl text-center'>Books about heroes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  m-5 gap-14">
        {dataForDisplay.map((item, index) => {
          return (
            <div key={index} class="space-x-10 ">
           
    <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="px-4 py-2">
            <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.connections.groupAffiliation}</p>
        </div>

        <img class="object-cover w-full h-48 mt-2" src={item.images.md} alt="NIKE AIR"/>

        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 class="text-lg font-bold text-white">$129</h1>
            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
        </div>
    </div>
            </div>
          );
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
}

export default Heroes