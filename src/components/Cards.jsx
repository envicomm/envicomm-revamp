import React from "react";
import application from "../assets/application.png"
import planning from "../assets/planning.png"
import reporting from "../assets/reporting.png"
import consultancy from "../assets/consultancy.png"


export default function Cards() {
  return (
    <div className="relative lg:h-screen w-full flex flex-col items-center justify-center lg:space-x-10  pb-20">
        <div className="flex justify-center pb-20">
            <h1 className="font-serif text-darkgreen font-bold lg:text-6xl text-2xl lg:pt-0 pt-20">
                SERVICES WE OFFER
            </h1>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-x-20  gap-12 px-4 ">
            <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[300px] lg:h-[300px] h-[300px] bg-gradient-to-t from-lightgreen via-white to-white items-center hover:scale-125 transition duration-300 ease-in-out ">
                <img src={application} className="w-20 flex"/>
                <figure class="flex justify-center pt-8"> 
                    <div class="text-xl font-bold   text-darkgreen  pb-6 font-serif">APPLICATION</div>
                </figure>
                <div class="flex flex-col text-center px-5 ">
                    <div class=" text-sm text-[#374151]">Streamlining the environmental application process for our clients to ensure compliance and expedite project approvals</div>
                </div>
            </div>
            <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[300px] lg:h-[300px] h-[300px] bg-gradient-to-t from-lightgreen via-white to-white items-center hover:scale-125 transition duration-300 ease-in-out ">
                <img src={planning} className="w-20 flex"/>
                <figure class="flex justify-center pt-8"> 
                    <div class="text-xl font-bold   text-darkgreen  pb-6 font-serif">PLANNING</div>
                </figure>
                <div class="flex flex-col text-center px-5 ">
                    <div class=" text-sm text-[#374151]">Delivering comprehensive environmental assessments backed by data-driven insights for informed decision-making</div>
                </div>
            </div>
            <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[300px] lg:h-[300px] h-[300px] bg-gradient-to-t from-lightgreen via-white to-white items-center hover:scale-125 transition duration-300 ease-in-out ">
                <img src={reporting} className="w-20 flex"/>
                <figure class="flex justify-center pt-8"> 
                    <div class="text-xl font-bold   text-darkgreen  pb-6 font-serif">PLANNING</div>
                </figure>
                <div class="flex flex-col text-center px-5 ">
                    <div class=" text-sm text-[#374151]">Navigating complex environmental regulations and processes to ensure your projects meet all compliance standards</div>
                </div>
            </div>
            <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[300px] lg:h-[300px] h-[300px] bg-gradient-to-t from-lightgreen via-white to-white items-center hover:scale-125 transition duration-300 ease-in-out ">
                <img src={consultancy} className="w-20 flex"/>
                <figure class="flex justify-center pt-8"> 
                    <div class="text-xl font-bold   text-darkgreen  pb-6 font-serif">PLANNING</div>
                </figure>
                <div class="flex flex-col text-center px-5 ">
                    <div class=" text-sm text-[#374151]">Leveraging expertise to provide sustainable environmental solutions tailored to your unique needs.</div>
                    
                </div>
            </div>
            
      </div>
    </div>
  );
}
