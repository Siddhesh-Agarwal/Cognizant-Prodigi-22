import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import X from "../src/AdXMark.png" 
import "./App.css"

export default function Alpha() {

  return (
        <><div>
          <header>
          <nav>
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a class="flex items-center">
      {/* <img src={X} class="h-6 mr-3 sm:h-9"/> */}
      <h1 class="font-bold text-xl ml-4">Handyman</h1>
  </a>
  <div class="flex md:order-2">
    <a href="http://localhost:3000/register">
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Tasks</button>
      </a> </div>
  </div>
</nav>

              <div class="w-5/6 mt-8 lg:mt-16 lg:max-w-2xl mx-auto">
                  <form class="flex items-center">
                      <label for="voice-search" class="sr-only">Search</label>
                      <div class="relative w-full">
                          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                          </div>
                          <a href="http://localhost:3000/search">
                              <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-16 pl-10 p-2.5" placeholder="Search for Services..." required />
                          </a>
                      </div>
                  </form>

              </div>
          </header>

          <div class="mt-12">
              <h2 class="font-bold text-xl ml-20">Recommended for you</h2>
          </div>
          <div>
              <div class="flex items-center justify-between text-gray-500 cursor-pointer space-x-3 pt-6 px-8 lg:p-32">

                  <div
                      class="flex flex-col items-center justify-center w-20  h-20  bg-green-200 rounded-2xl text-green-600 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
                     <a href="http://localhost:3000/order">
                      <p class="text-sm mt-1">Salon</p>
                      </a>
                  </div>
                  <div
                      class="flex flex-col items-center justify-center w-20  h-20  bg-yellow-200 rounded-2xl text-yellow-600  shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
                      <a href="http://localhost:3000/order"><p class="text-sm mt-1">Plumbing</p></a> 
                  </div>
                  <div
                      class="flex flex-col items-center justify-center w-20  h-20  bg-indigo-200  rounded-2xl  text-indigo-500 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
                      <a href="http://localhost:3000/order"><p class="text-sm mt-1">Electrician</p></a>
                  </div>
                  <div
                      class="flex flex-col items-center justify-center w-20  h-20  bg-pink-200   rounded-2xl text-pink-500 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
                    <a href="http://localhost:3000/order">  <p class="text-sm mt-1">Repair</p></a>
                  </div>

              </div>
          </div>
          <div class="mt-4">
              <h2 class="font-bold text-xl ml-20">Quick Home Repairs</h2>
          </div>
      </div>
      <section class="text-gray-600 body-font mt-5 flex justify-center items-center">
              <div class="container px-5 mx-auto">
                  <div class="flex flex-wrap -m-4 text-center">
                      <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                          <div class=" flex items-center  justify-between p-4  rounded-lg  bg-slate-200  shadow-indigo-50 shadow-md">
                              <div>
                                  <h2 class="text-gray-900 text-lg font-bold">Tap Service</h2>
                                  <h3 class="mt-2 text-xl font-bold text-red-500 text-left">₹ 150</h3>
                                  <p class="text-sm font-semibold text-gray-400">⭐4.82(93K)</p>
                                  <button class="text-sm mt-6 px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">Add to cart</button>
                              </div>
                              <div
                                  class="bg-gradient-to-tr from-red-500 to-red-400 w-32 h-32  rounded-full shadow-2xl shadow-red-400 border-white  border-dashed border-2  flex justify-center items-center ">
                                  <div>
                                      <h1 class="text-white text-2xl">On Deal!</h1>
                                  </div>
                              </div>
                          </div>

                      </div>

                      <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                          <div class=" flex items-center  justify-between p-4  rounded-lg bg-slate-200 shadow-indigo-50 shadow-md">
                          <div>
            <h2 class="text-gray-900 text-lg font-bold">Jet Spray</h2>
            <h3 class="mt-2 text-xl font-bold text-indigo-500 text-left">₹ 100</h3>
            <p class="text-sm font-semibold text-gray-400">⭐4.76(181.K)</p>
            <button class="text-sm mt-6 px-4 py-2 bg-indigo-400 text-white rounded-lg  tracking-wider hover:bg-indigo-500 outline-none">Add to cart</button>
          </div>
                              <div
                                  class="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                                  <div>
                                      <h1 class="text-white text-2xl">On Deal!</h1>
                                  </div>
                              </div>
                          </div>

                      </div>

                  </div>
                  </div>
              </section>
              
              <div
			class="sticky bottom-2  p-5 px-6 m-2   flex items-center justify-between   bg-gray-900 shadow-3xl text-gray-400 rounded-2xl cursor-pointer">
		
    
    	<div class="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
<a href="http://localhost:3000/">
Home
</a>
			</div>
		
    
    	<div class="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
</svg>
            <a href="http://localhost:3000/star">
Star Zone
                </a>
			</div>
                {/* Magalir THittam */}
		
    
    		<div class="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
				</svg>
                <a href="http://localhost:3000/feedback">
                Feedback
                </a>
            {/* Grievance Portal */}
			</div>
		
    
    	<div class="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
<a href="http://localhost:3000/community">
Community
</a>
			</div>
		
    </div>
              </>
  );
}
