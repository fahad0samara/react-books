import React from "react";

const Datacat = (str, num) => {
  if (str.length > num) {
    return str.substring(0, num) + "...";
  }
  return str;
};
const FatchData = ({item}) => {
  return (
    <div class="flex gradient max-w-md  text-white shadow-lg rounded-lg overflow-hidden">
                  <img src={item.cover} alt class="w-1/3 bg-cover"></img>
                  <div class="w-2/3 p-4">
                    <h1 class=" font-bold text-2xl">
                     {item.name}
                    </h1>
                    <p class="mt-2  text-sm">
                 {item.winning_category}
                    </p>
                    <div class="flex item-center mt-2">
                      <svg
                        class="w-5 h-5 fill-current "
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
                        {item.price}
                      </h1>
                      <a  href={item.url} class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                      Go to the site</a>
                    
                    </div>
                  </div>
                </div>
  );
};

export default FatchData;