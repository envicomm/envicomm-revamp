import React from "react";
import forest from "../assets/forest.png";
import { ClipboardCheck } from "lucide-react";
import { Handshake } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { SearchCheck } from "lucide-react";

export default function Cards() {
  return (
    <div className="relative overflow-x-hidden lg:h-screen w-full flex flex-col items-center justify-center lg:space-x-10">
        <div className="flex justify-center pb-20">
            <h1 className="font-serif text-darkgreen font-bold lg:text-6xl text-2xl lg:pt-0 pt-20">
                SERVICES WE OFFER
            </h1>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-x-20  gap-8 px-4 ">
            <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[300px] lg:h-[350px] h-[350px] bg-gradient-to-t from-lightgreen via-white to-white">
                <figure class="flex justify-center rounded-tl-2xl rounded-tr-2xl pt-8 bg-darkgreen"> 
                    <div class="text-2xl font-bold   text-white shadow-lg pb-6">APPLICATION</div>
                </figure>
                <div class="flex flex-col p-5">
                    
                    <div class=" text-lg text-[#374151]">Streamlining the environmental application process for our clients to ensure compliance and expedite project approvals</div>
                    <div class="flex justify-end pt-6">
                        <button class="bg-darkgreen text-[#ffffff] font-bold text-base  p-3 rounded-lg hover:bg-lightgreen active:scale-95 transition-transform transform">More</button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[300px] lg:h-[350px] h-[350px] bg-gradient-to-t from-lightgreen via-white to-white">
                <figure class="flex justify-center rounded-tl-2xl rounded-tr-2xl pt-8 bg-darkgreen"> 
                    <div class="text-2xl font-bold   text-white shadow-lg pb-6">PLANNING</div>
                </figure>
                <div class="flex flex-col p-5 ">
                    
                    <div class=" text-lg text-[#374151]">Delivering comprehensive environmental assessments backed by data-driven insights for informed decision-making</div>
                    <div class="flex justify-end pt-6">
                        <button class="bg-darkgreen text-[#ffffff] font-bold text-base  p-3 rounded-lg hover:bg-lightgreen active:scale-95 transition-transform transform">More</button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[300px] lg:h-[350px] h-[350px] bg-gradient-to-t from-lightgreen via-white to-white">
                <figure class="flex justify-center rounded-tl-2xl rounded-tr-2xl pt-8 bg-darkgreen"> 
                    <div class="text-2xl font-bold   text-white shadow-lg pb-6">REPORTING</div>
                </figure>
                <div class="flex flex-col p-5 ">
                    
                    <div class=" text-lg text-[#374151]">Navigating complex environmental regulations and processes to ensure your projects meet all compliance standards.</div>
                    <div class="flex justify-end pt-6">
                        <button class="bg-darkgreen text-[#ffffff] font-bold text-base  p-3 rounded-lg hover:bg-lightgreen active:scale-95 transition-transform transform">More</button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[300px] lg:h-[350px] h-[350px] bg-gradient-to-t from-lightgreen via-white to-white">
                <figure class="flex justify-center rounded-tl-2xl rounded-tr-2xl pt-8 bg-darkgreen"> 
                    <div class="text-2xl font-bold   text-white shadow-lg pb-6">CONSULTANCY</div>
                </figure>
                <div class="flex flex-col p-5 ">
                    
                    <div class=" text-lg text-[#374151]">Leveraging expertise to provide sustainable environmental solutions tailored to your unique needs.</div>
                    <div class="flex justify-end pt-6">
                        <button class="bg-darkgreen text-[#ffffff] font-bold text-base  p-3 rounded-lg hover:bg-lightgreen active:scale-95 transition-transform transform">More</button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}
