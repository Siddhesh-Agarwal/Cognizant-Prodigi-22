import React from 'react'

function Beta () {
  const pay = () => {
    alert("Partial Payment will be initiated in 2-3 working days");
  }
  return (
    <><header>
          <nav>
              <div class='flex items-center justify-center'>
                  <h1 class="mt-6 font-bold text-xl">Handyman</h1>
              </div>
          </nav>
      </header>
      <div class="p-10">
  <div class="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg">
    <div class="flex flex-row items-baseline flex-nowrap bg-gray-100 p-4">
      <h1 class="ml-2 uppercase font-bold text-gray-500">Booking Details</h1>
      <p class="ml-2 font-normal text-gray-500">Wednesday 18 Aug</p>
    </div>
    <div class="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
      <div class="flex flex-row place-items-center p-2">
        <div class="flex flex-col ml-2">
          <p class="text-xs text-gray-500 font-bold">Name of Service Provider</p>
          <p class="text-xs text-gray-500">+91 9000 00000</p>
        </div>
      </div>
    </div>
    <div class="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
      <div class="flex mx-6 py-4 flex-row flex-wrap">
      
        <div class="text-sm mx-2 flex flex-col">
          <p class="">Date of Arrival</p>
          <p class="font-bold">DD/MM</p>
        </div>
      </div>
<div class="flex mx-6 py-4 flex-row flex-wrap">
      
        <div class="text-sm mx-2 flex flex-col">
          <p class="">Time of Arrival</p>
          <p class="font-bold">IST Timezone</p>
        </div>
      </div>
      <div class="md:border-l-2 mx-6 md:border-dotted flex flex-row py-4 mr-6 flex-wrap">
        <button onClick={pay} class="w-32 h-11 rounded flex border-solid border text-white bg-green-800 mx-2 justify-center place-items-center"><div class="font-bold" >Cancel Service</div>
        </button>
      </div>
    </div>
  </div>
</div>
     </>
  )
}
export default Beta;