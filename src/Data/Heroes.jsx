import  { useEffect, useState } from 'react'
import axios from "axios";
import '../App.css'
const Heroes = () => {
const [data,setdata]=useState([]);
 const [expanded, setExpanded] = useState(false);
 const dataForDisplay = expanded ? data : data.slice(0, 8);
 const Datacat = (str, num) => {
  if (str.length > num) {
    return str.substring(0, num) + "...";
  }
  return str;
};
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
      <div className="grid grid-cols-1 md:grid-cols-4 text-black  m-5 gap-14">
        {dataForDisplay.map((item, index) => {
          return (
            <div key={index} class="space-x-10 ">
           
    <div class="max-w-xs mx-auto overflow-hidden bg-[#facc15] rounded-lg shadow-lg ">
        <div class="px-4 py-2">
            <h1 class="text-3xl font-bold uppercase ">{Datacat(item.name,10)}</h1>
            <p class="mt-1 font-black ">{Datacat(item.connections.groupAffiliation,30)}</p>
        </div>

        <img class="object-cover w-full h-48 mt-2" src={item.images.md} alt="NIKE AIR"/>

       
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