import React from "react";
import forest from "../assets/forest.png";
import { ClipboardCheck } from "lucide-react";
import { Handshake } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { SearchCheck } from "lucide-react";

export default function Cards() {
  return (
    <div className="relative lg:h-screen flex flex-col items-center justify-center lg:space-x-10  bg-forest lg:bg-cover py-10 ">
        <div className="flex">
            <h1>
                SERVICES WE OFFER
            </h1>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 px-4 py-10 ">
            <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[400px] lg:h-[500px] h-[400px]">
            <figure class="flex justify-center items-center rounded-2xl">
                <img src={forest} alt="Card Preview" class="rounded-t-2xl" />
            </figure>
            <div class="flex flex-col p-8">
                <div class="text-2xl font-bold   text-[#374151] pb-6">Generator</div>
                <div class=" text-lg text-[#374151]">Leverage a graphical editor to create beautiful web components.</div>
                <div class="flex justify-end pt-6">
                    <button class="bg-[#7e22ce] text-[#ffffff] font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[400px] lg:h-[500px] h-[400px]">
            <figure class="flex justify-center items-center rounded-2xl">
                <img src={forest} alt="Card Preview" class="rounded-t-2xl" />
            </figure>
            <div class="flex flex-col p-8">
                <div class="text-2xl font-bold   text-[#374151] pb-6">Generator</div>
                <div class=" text-lg   text-[#374151]">Leverage a graphical editor to create beautiful web components.</div>
                <div class="flex justify-end pt-6">
                    <button class="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[400px] lg:h-[500px] h-[400px]">
            <figure class="flex justify-center items-center rounded-2xl">
                <img src={forest} alt="Card Preview" class="rounded-t-2xl" />
            </figure>
            <div class="flex flex-col p-8">
                <div class="text-2xl font-bold   text-[#374151] pb-6">Generator</div>
                <div class=" text-lg   text-[#374151]">Leverage a graphical editor to create beautiful web components.</div>
                <div class="flex justify-end pt-6">
                    <button class="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl lg:w-[400px] lg:h-[500px] h-[400px]">
            <figure class="flex justify-center items-center rounded-2xl">
                <img src={forest} alt="Card Preview" class="rounded-t-2xl" />
            </figure>
            <div class="flex flex-col p-8">
                <div class="text-2xl font-bold   text-[#374151] pb-6">Generator</div>
                <div class=" text-lg   text-[#374151]">Leverage a graphical editor to create beautiful web components.</div>
                <div class="flex justify-end pt-6">
                    <button class="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
