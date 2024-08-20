import React from 'react'
import Hagnaya from '../assets/Hagnaya.png'
import Eastland from '../assets/Eastland.png'
import Shemberg from '../assets/Shemberg.png'

function Feedback() {
  return (
    <div className='h-screen w-full'>
    <section className='lg:h-[200px] flex items-center justify-center'>
        <div className='px-2 pb-8 '>
            <h1 className='text-darkgreen font-extrabold font-serif lg:text-4xl text-4xl text-center'>Read trusted reviews from our customers</h1>
        </div>
    </section> 
    <section class="text-white bg-gradient-to-b from-darkgreen via-midgreen to-lightgreen body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4 gap-y-8">
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 lg:pr-36 lg:border-r-red lg:border-r-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-36 h-36 mb-8 object-cover object-center rounded-full inline-block border-2 border-lightgreen bg-opacity-10" src={Hagnaya} />
            <p class="leading-relaxed">“We are very satisfied with your service, and if I'm going to rate it from 1 to 10, it is always 10.”</p>
            <span class="inline-block h-1 w-10 rounded bg-lightgreen mt-6 mb-4"></span>
            <h2 class="text-white font-medium title-font tracking-wider text-md">HAGNAYA BEACH RESORT</h2>
            <p class="text-white text-sm">Beach Resort Project</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 lg:border-r-red lg:border-r-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-36 h-36 mb-8 object-cover object-center rounded-full inline-block border-2 border-lightgreen bg-opacity-10" src={Eastland} />
            <p class="leading-relaxed">"I am very satisfied with the service provided by Envi-comm. The quality of their work is excellent, and both the staff and team leader are highly professional in their respective fields.”</p>
            <span class="inline-block h-1 w-10 rounded bg-lightgreen mt-6 mb-4"></span>
            <h2 class="text-white font-medium title-font tracking-wider text-md">EASTLAND PROPERTY VENTURES, INC.</h2>
            <p class="text-white text-sm">Proposed 10-Storey Socialized Condominium Development</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 p-4 lg:pl-36">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-36 h-36 mb-8 object-cover object-center rounded-full inline-block border-2 border-lightgreen bg-opacity-10" src={Shemberg} />
            <p class="leading-relaxed">So far, I love the service here at Envi-comm Corporation, and I can truly say that their service is excellent.</p>
            <span class="inline-block h-1 w-10 rounded bg-lightgreen mt-6 mb-4"></span>
            <h2 class="text-white font-medium title-font tracking-wider text-sm">SHEMBERG-INGREDIENTS GUMS AND CORPORATION</h2>
            <p class="text-white">---</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Feedback