import React from 'react'
import { Link } from 'react-router-dom'



function Projects() {
  return (
    <div class="relative w-full overflow-hidden bg-gradient-to-b from-lightgreen via-white to-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
  <div class="relative mx-auto max-w-7xl">
    <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">See Our Projects</h2>
      <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="" alt="" />
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">ECC</a>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">Water Distribution Project</p>
              <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
            </a>
          </div>
          <div className='flex justify-end p-6'>
            <Link to="" className='flex bg-black w-1/2 text-white text-center justify-center p-2 rounded-xl hover:bg-slate-500'>Button</Link>
          </div>
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="" alt="" />
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">Video</a>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>
              <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi.,
                tempore temporibus quo laudantium.</p>
            </a>
          </div>
          <div className='flex justify-end p-6'>
            <Link to="" className='flex bg-black w-1/2 text-white text-center justify-center p-2 rounded-xl hover:bg-slate-500'>Button</Link>
          </div>
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="" alt=""/>
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">Case Study</a>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">Improve your customer experience</p>
              <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis
                perferendis hic.</p>
            </a>
          </div>
          <div className='flex justify-end p-6'>
            <Link to="" className='flex bg-black w-1/2 text-white text-center justify-center p-2 rounded-xl hover:bg-slate-500'>Button</Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default Projects