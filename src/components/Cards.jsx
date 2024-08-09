import React from "react";
import forest from "../assets/forest.png";
import { ClipboardCheck } from "lucide-react";
import { Handshake } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { SearchCheck } from "lucide-react";

export default function Cards() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center flex-col space-y-8 bg-forest bg-cover bg-center">
    
      <div className="relative flex flex-col justify-center items-center space-y-8 p-5">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-serif text-midgreen">
          Services We Offer
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="max-w-sm h-100 rounded text-darkgreen bg-slate-100 overflow-hidden shadow-lg font-serif">
            <ClipboardCheck className="w-40 h-16 mx-auto pt-4 text-midgreen" />
            <div className="px-4 py-4 text-center">
              <div className="text-xl mb-4">Application</div>
              <p className="text-gray-700 font-sans text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm h-100 rounded text-darkgreen bg-slate-100 overflow-hidden shadow-lg font-serif">
            <Handshake className="w-40 h-16 mx-auto text-midgreen" />
            <div className="px-6 py-4 text-center">
              <div className="text-xl mb-4">Planning</div>
              <p className="text-gray-700 font-sans text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm h-80 text-darkgreen rounded bg-slate-100 overflow-hidden shadow-lg font-serif">
            <ChartNoAxesCombined className="w-40 h-16 mx-auto text-midgreen" />
            <div className="px-6 py-4 text-center">
              <div className="text-xl mb-4">Reporting</div>
              <p className="text-gray-700 font-sans text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm h-80 text-darkgreen rounded bg-slate-100 overflow-hidden shadow-lg font-serif">
            <SearchCheck className="w-40 h-16 mx-auto text-midgreen" />
            <div className="px-6 py-4 text-center">
              <div className="text-xl mb-4">Consultancy</div>
              <p className="text-gray-700 font-sans text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
