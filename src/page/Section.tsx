import img from '../img/0.png'
import img0 from '../img/1.png'
import img2 from '../img/4.png'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowRight } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";




// import required modules
import { Autoplay } from "swiper";

const section = () => {
  return (
      <div>
         
          <div className="relative w-full h-1/2  flex justify-end bg-gradient-to-t from-black via-transparent to-black overflow-hidden">
      
             
              <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                  }}
                
                  navigation={true}
                  modules={[Autoplay ]}
                  className="mySwiper"
              >
                  <SwiperSlide>
                      
                      
                      <img src={img} alt="" className="absolute w-full h-full object-cover object-left sm:object-center opacity-70" />
                  
                      <div className="relative py-28  xl:mx-52 w-full  md:w-2/3 h-full flex flex-col justify-center items-center">

                          {/* ::Hero title & text */}
                          <div className=" bg-black   bg-opacity-80 p-10  rounded-xl md:rounded-r-none  gradient text-white shadow-2xl">
                              <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">free browsing, <br /><span className="text-yellow-400 text-opacity-80">votes</span>  <br />free browsing !</h1>
                              <p className="mt-3 text-gray-100 font-firacode">The best place to browse and search for the best books from all sites.</p>
                          </div>

                          {/* ::Hero button */}
                          <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
                              <span className="relative -top-0.5 mr-2">Explore</span>
                              < AiOutlineArrowRight size={40} className="absolute left-32 w-20" />
                          </button>

                          {/* ::Social media */}
                       

                      </div>
                      <div className="absolute top-4 sm:top-auto bottom-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 inline-flex md:flex-col justify-around items-center text-yellow-400 transform -translate-x-1/2">
                          {/* Twitter */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                          </a>
                          {/* Linkedin */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                          </a>
                          {/* Google + */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
                                  <path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
                              </svg>
                          </a>
                      </div>

                      {/* :BOTTOM OPTIONS */}
                      <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
                          {/* ::Our Story */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Story
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                          </a>
                          {/* ::Our Shop */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Shop
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                          </a>
                          {/* ::Our Contact */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Contact
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                          </a>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide> <img src={img0} alt="" className="absolute w-full h-full object-cover object-left sm:object-center opacity-70" />

                      <div className="relative py-28  xl:mx-52 w-full  md:w-2/3 h-full flex flex-col justify-center items-center">

                          {/* ::Hero title & text */}
                          <div className="    bg-opacity-80 p-10  rounded-xl md:rounded-r-none  bg-black  text-white shadow-2xl">
                              <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">free browsing, <br /><span className="text-yellow-400 text-opacity-80">amazon</span>  <br />free browsing !</h1>
                              <p className="mt-3 text-gray-100 font-firacode">The best place to browse and search for the best books from all sites.</p>
                          </div>

                          {/* ::Hero button */}
                          <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
                              <span className="relative -top-0.5 mr-2">Explore</span>
                              < AiOutlineArrowRight size={40} className="absolute left-32 w-20" />
                          </button>

                          {/* ::Social media */}


                      </div>
                      <div className="absolute top-4 sm:top-auto bottom-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 inline-flex md:flex-col justify-around items-center text-yellow-400 transform -translate-x-1/2">
                          {/* Twitter */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                          </a>
                          {/* Linkedin */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                          </a>
                          {/* Google + */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
                                  <path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
                              </svg>
                          </a>
                      </div>

                      {/* :BOTTOM OPTIONS */}
                      <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
                          {/* ::Our Story */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Story
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                          </a>
                          {/* ::Our Shop */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Shop
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                          </a>
                          {/* ::Our Contact */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Contact
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                          </a>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide> <img src={img2} alt="" className="absolute w-full h-full object-cover object-left sm:object-center opacity-70" />

                      <div className="relative py-28  xl:mx-52 w-full  md:w-2/3 h-full flex flex-col justify-center items-center">

                          {/* ::Hero title & text */}
                          <div className="    bg-opacity-80 p-10  rounded-xl md:rounded-r-none  bg-black  text-white shadow-2xl">
                              <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">free browsing, <br /><span className="text-yellow-400 text-opacity-80">heroes</span> est <br />free browsing !</h1>
                              <p className="mt-3 text-gray-100 font-firacode">The best place to browse and search for the best books from all sites.</p>
                          </div>

                          {/* ::Hero button */}
                          <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
                              <span className="relative -top-0.5 mr-2">Explore</span>
                              < AiOutlineArrowRight size={40} className="absolute left-32 w-20" />
                          </button>

                          {/* ::Social media */}


                      </div>
                      <div className="absolute top-4 sm:top-auto bottom-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 inline-flex md:flex-col justify-around items-center text-yellow-400 transform -translate-x-1/2">
                          {/* Twitter */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                          </a>
                          {/* Linkedin */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                          </a>
                          {/* Google + */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
                                  <path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
                              </svg>
                          </a>
                      </div>

                      {/* :BOTTOM OPTIONS */}
                      <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
                          {/* ::Our Story */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Story
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                          </a>
                          {/* ::Our Shop */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Shop
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                          </a>
                          {/* ::Our Contact */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Contact
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                          </a>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide> <img src={img3} alt="" className="absolute w-full h-full object-cover object-left sm:object-center opacity-70" />

                      <div className="relative py-28  xl:mx-52 w-full  md:w-2/3 h-full flex flex-col justify-center items-center">

                          {/* ::Hero title & text */}
                          <div className="    bg-opacity-80 p-10  rounded-xl md:rounded-r-none  bg-black  text-white shadow-2xl">
                              <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">free browsing, <br /><span className="text-yellow-400 text-opacity-80">Year</span> est <br />free browsing !</h1>
                              <p className="mt-3 text-gray-100 font-firacode">The best place to browse and search for the best books from all sites.</p>
                          </div>

                          {/* ::Hero button */}
                          <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
                              <span className="relative -top-0.5 mr-2">Explore</span>
                              < AiOutlineArrowRight size={40} className="absolute left-32 w-20" />
                          </button>

                          {/* ::Social media */}


                      </div>
                      <div className="absolute top-4 sm:top-auto bottom-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 inline-flex md:flex-col justify-around items-center text-yellow-400 transform -translate-x-1/2">
                          {/* Twitter */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                          </a>
                          {/* Linkedin */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                          </a>
                          {/* Google + */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
                                  <path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
                              </svg>
                          </a>
                      </div>

                      {/* :BOTTOM OPTIONS */}
                      <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
                          {/* ::Our Story */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Story
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                          </a>
                          {/* ::Our Shop */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Shop
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                          </a>
                          {/* ::Our Contact */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Contact
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                          </a>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide> <img src={img4} alt="" className="absolute w-full h-full object-cover object-left sm:object-center opacity-70" />

                      <div className="relative py-28  xl:mx-52 w-full  md:w-2/3 h-full flex flex-col justify-center items-center">

                          {/* ::Hero title & text */}
                          <div className="    bg-opacity-80 p-10  rounded-xl md:rounded-r-none  bg-black  text-white shadow-2xl">
                              <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">free browsing, <br /><span className="text-yellow-400 text-opacity-80">Genre</span>  <br />free browsing !</h1>
                              <p className="mt-3 text-gray-100 font-firacode">The best place to browse and search for the best books from all sites.</p>
                          </div>

                          {/* ::Hero button */}
                          <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
                              <span className="relative -top-0.5 mr-2">Explore</span>
                              < AiOutlineArrowRight size={40} className="absolute left-32 w-20" />
                          </button>

                          {/* ::Social media */}


                      </div>
                      <div className="absolute top-4 sm:top-auto bottom-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 inline-flex md:flex-col justify-around items-center text-yellow-400 transform -translate-x-1/2">
                          {/* Twitter */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                          </a>
                          {/* Linkedin */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                          </a>
                          {/* Google + */}
                          <a href="#link" className="mx-3 transform hover:scale-110">
                              <svg className="w-7 h-7" fill="currentColor" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
                                  <path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
                              </svg>
                          </a>
                      </div>

                      {/* :BOTTOM OPTIONS */}
                      <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
                          {/* ::Our Story */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Story
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                          </a>
                          {/* ::Our Shop */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Shop
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                          </a>
                          {/* ::Our Contact */}
                          <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                              Our Contact
                              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                          </a>
                      </div>
                  </SwiperSlide>
              </Swiper>
             
             

              

          </div>

    </div>
  )
}

export default section