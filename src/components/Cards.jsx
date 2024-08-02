import React from 'react'
import forest from '../assets/forest.png'

export default function Cards() {
  return (
    <div className="relative h-[93vh] w-full flex items-center justify-center flex-col space-y-8">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${forest})`, opacity: '0.5' }}
            ></div>
            <div className="relative z-10 flex flex-col items-center space-y-8">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-serif text-midgreen">
                    Services We Offer
                </h1>
                <div className='flex flex-row gap-5'>
                    <div class="max-w-sm rounded bg-slate-100 overflow-hidden shadow-lg">
                        <img class="w-full" src="" alt="Sunset in the mountains"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                    </div>
                    <div class="max-w-sm rounded bg-slate-100 overflow-hidden shadow-lg">
                        <img class="w-full" src="" alt="Sunset in the mountains"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                    </div>
                    <div class="max-w-sm rounded bg-slate-100 overflow-hidden shadow-lg">
                        <img class="w-full" src="" alt="Sunset in the mountains"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
