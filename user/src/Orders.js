import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './App.css'
//Place Orders
function Orders() {

    return (
        <><div className="App">
            <div className="page">
                <Sidebar />
            </div></div>
            <div class="flex items-center justify-center pt-4 bg-gray-200 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                </svg>
                <h1 class="text-3xl font-bold text-blue-600 tracking-wider">ChainHive</h1>
            </div>
            <main class="flex flex-col justify-center bg-gray-200 pl-24 pr-24 pt-8 pb-32">
                <div class="w-full rounded-xl bg-white p-4 shadow-2xl shadow-white/40">
                    <div class="grid grid-cols-2 gap-4 mb-2">
                        <div class="flex flex-col">
                            <label for="name" class="text-gray-700">Name of the Organization</label>
                            <input type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your name" />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-gray-700">Phone Number</label>
                            <input type="number" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your Phone Number" />
                        </div>
                    </div>

                    <div class="mb-4 flex flex-col">
                        <label for="email" class="text-gray-700">Email Address</label>
                        <input type="email" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email" />

                    </div>
                    <div class="mb-4 flex flex-col">
                        <label class="text-gray-700">Address</label>
                        <input type="text" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your Address" />

                    </div>
                    <div class="mb-4 flex flex-col">
                        <label class="text-gray-700">Delivery Date</label>
                        <input type="date" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter a Delivery Date" />

                    </div>
                    <div class="mb-4 grid grid-cols-2 gap-4">
                        <div class="flex flex-col">
                            <label class="text-gray-700">Product</label>
                            <input type="text" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter the Product name" />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-gray-700">Quantity</label>
                            <input type="number" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your Product's quantity" />
                        </div>
                    </div>
                    <div class="flex items-center justify-center">
                        <a href="#" class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-blue-600 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-200 hover:text-black focus:z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" mr-2 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                            </svg> Place Order
                        </a>
                    </div>
                </div>
            </main></>
    );
};
export default Orders
