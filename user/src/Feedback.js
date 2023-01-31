import React from 'react';
import Sidebar from './Sidebar'
//Feedback Form
function Home(){
  return(
    <div className="App">
    <div className="page">
    <div class="bg-gray-200 w-full flex items-center justify-center pb-4 ">
    <div class="w-full">
            <div class="flex items-center justify-center space-x-2 mt-4 mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                    </svg>
                    <h1 class="text-3xl font-bold text-blue-600 tracking-wider">Chain Hive</h1>
                </div>
                <div class="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-6 mx-auto px-16 py-8 rounded-lg shadow-2xl">

                    <h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">Feedback Form</h2>
                   
                    <form class="my-8 text-sm">
                        <div class="flex flex-col my-4">
                            <label for="name" class="text-gray-700">Name</label>
                            <input type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your name"/>
                            
                        </div>

                        <div class="flex flex-col my-4">
                            <label for="email" class="text-gray-700">Email Address</label>
                            <input type="email" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email"/>
                        </div>
                    
                          <div class="flex flex-col my-4">
                            <label for="name" class="text-gray-700">Review</label>
                            <textarea rows="5" cols="33" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" >
                            </textarea>
                        </div>

                            <div class="flex flex-col my-4">
                               <label for="name" class="text-gray-700">Category</label>
                              <select id="countries" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" >
  <option selected>Choose a Category</option>
  <option>Review</option>
  <option>Complaint</option>
  <option>Suggestion</option>
</select>
                        </div>
                  
                        <div class="flex items-center justify-center">
                <a href="#" class="inline-flex items-center justify-center w-full px-5 py-3 mr-2 text-sm font-medium text-white bg-blue-600 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-200 hover:text-black focus:z-10">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" mr-2 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
</svg> Submit
                </a>
              </div>
                    </form>
                    
                </div>
            </div>
        </div>
        <Sidebar/>
        </div>
        </div>
        );
        };

        export default Home;