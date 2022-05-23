import  { useEffect, useState } from 'react'
import axios from "axios";
import '../App.css'
const Heroes = () => {
const [data,setdata]=useState([]);
 const [expanded, setExpanded] = useState(false);
 const dataForDisplay = expanded ? data : data.slice(0, 4);
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
            console.log(response.data);
            setdata(response.data);
        }).catch(function (error) {
            console.error(error);
        });

}
, [])
  return (
    <div class='gradientt'>
      <h1 className=' text-4xl text-center'>Books about heroes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  m-5 gap-14">
        {dataForDisplay.map((item, index) => {
          return (
            <div key={index} class="space-x-10 ">
              <div class="wrapper  ">
                <div class="product-img ">
                  <img src={item.images.md} />
                </div>
                <div class="product-info">
                  <div class="product-text">
                    <h1>{item.name}</h1>
                    <h2>BY {item.biography.publisher}</h2>
                    <p>
                      {item.connections.groupAffiliation}
                      <br /> {item.connections.relatives}
                      <br /> {item.connections.enemies}
                    </p>
                  </div>
                  <div class="product-price-btn">
                    <div class="card-read">Read</div>
                  </div>
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