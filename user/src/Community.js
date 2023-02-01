import React from 'react'

function Community () {
  return (
       <><header>
          <nav>
              <div class='flex items-center justify-center'>
                  <h1 class="mt-6 font-bold text-xl">Handyman</h1>
              </div>
          </nav>
      </header>
      <div class="mt-5 flex flex-col items-center justify-center">
              <card class="w-5/6 flex flex-col">
                  <div class="flex flex-row gap-3 items-center">
                      <img src="https://picsum.photos/30/30" class="rounded-full" />
                      <div> Organization Name </div>
                      <div class="text-sm text-gray-500"> Jan 28 </div>
                  </div>
                  <content class="grid grid-cols-4 gap-3">
                      <div class="col-span-3 flex flex-col">
                          <subject class="font-bold text-lg pt-3">
                              Go (Golang) with Structs and Interfaces
                          </subject>
                          <description class="font-light text-sm pt-2">
                              Although it would be possible for us to write programs only using Go’s built-in data types, at some point, it would become quite tedious. Consider a program that....
                          </description>
                      </div>
                      <div class="flex items-center">
                          <img src="https://picsum.photos/100/100" />
                      </div>
                  </content>
                  <hr class="mt-5" />
              </card>
              <card class="w-5/6 flex flex-col mt-5">
                  <div class="flex flex-row gap-3 items-center">
                      <img src="https://picsum.photos/30/30" class="rounded-full" />
                      <div> Marketing Director,Company </div>
                      <div class="text-sm text-gray-500"> Jan 27 </div>
                  </div>
                  <content class="grid grid-cols-4 gap-3">
                      <div class="col-span-3 flex flex-col">
                          <subject class="font-bold text-lg pt-3">
                          Corrigendum_RFP_IT_20012023
                          </subject>
                          <description class="font-light text-sm pt-2">
                          The Government of Tamil Nadu is in the process of creation of new eProcurement portal for carrying out all procurement related activities online by all Government etc.                          </description>
                      </div>
                      <div class="flex items-center">
                          <img src="https://picsum.photos/100/100" />
                      </div>
                  </content>
                  <hr class="mt-5" />
              </card>
          </div></>
      )
      }
export default Community