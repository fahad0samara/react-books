import React from "react";
import './Data.css'
import {FcLike } from 'react-icons/fc'
const Fatch = ({item}) => {
  return (

    <div class="gridd">

    <div class="cardcontainer  space-y-7">
      <img src={item.cover} width="300" height="150" alt="placeholder"/>
      <h1>{item.author}</h1>
      <p>{item.name}</p>
   <h1 className='flex items-center text-center '>
   <FcLike size='40'   />
   {item.votes}
 
   </h1>
   <a href={item.url} class>Browse now</a>
     </div>
            
            </div>
      

  );
};

export default Fatch;