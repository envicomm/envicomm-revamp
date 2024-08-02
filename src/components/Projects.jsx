import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import { MapPin } from "lucide-react";

export default function Projects() {
  return (
    <div className="grid grid-cols-3  gap-6 p-20">



      {/* Card 1 */}
      <div className="w-full  relative bg-black ">
        <div className="grid grid-cols-2 w-full  h-full ">
          {" "}
          {/**/}
          <img
            className="w-full h-full object-cover "
            src={project1}
            alt="Project 1"
          />
          <div className="grid grid-rows-2  ">
            <div>
              <img className=" object-cover " src={project3} alt="Project 3" />
            </div>

            <div>
              <img className=" object-cover " src={project3} alt="Project 3" />
            </div>
          </div>
        </div>

        <div className="bottom-0 left-0 w-full bg-white bg-opacity-70 absolute">
          <div className="text-gray-800 font-semibold text-lg mb-2">
            Compliance Monitoring Report (CMR)
          </div>

          <div className="text-center bg-midgreen w-1/2  flex items-center text-white p-4 gap-4">
            <MapPin className="w-6 h-6" />
            Mandaue City, Cebu
          </div>
        </div>
      </div>



      {/* Card 2 */}
      <div className="w-full  relative bg-black ">
        <div className="grid grid-cols-2 w-full  h-full ">
          {" "}
          {/**/}
          <img
            className="w-full h-full object-cover "
            src={project1}
            alt="Project 1"
          />
          <div className="grid grid-rows-2  ">
            <div>
              <img className=" object-cover " src={project3} alt="Project 3" />
            </div>

            <div>
              <img className=" object-cover " src={project3} alt="Project 3" />
            </div>
          </div>
        </div>

        <div className="bottom-0 left-0 w-full bg-white bg-opacity-70 h-[150px] absolute flex items-end">
          <div className="flex flex-col w-full">
            <div className="text-gray-800 font-semibold text-lg mb-2 ml-4">
              Compliance Monitoring Report (CMR)
            </div>

            <div className="bg-midgreen w-1/2 flex items-center text-white p-4 gap-4 ">
              <MapPin className="w-6 h-6" />
              Mandaue City, Cebu
            </div>
          </div>
        </div>
      </div>

      

      {/* Card 3 */}
      <div className="w-full  relative bg-black ">
        <div className="grid grid-cols-2 w-full  h-full ">
          {" "}
          {/**/}
          <img
            className="w-full h-full object-cover "
            src={project1}
            alt="Project 1"
          />
          <div className="grid grid-rows-2  ">
            <div>
              <img className=" object-cover " src={project3} alt="Project 3" />
            </div>

            <div>
              <img className=" object-cover " src={project3} alt="Project 3" />
            </div>
          </div>
        </div>

        <div className="bottom-0 left-0 w-full bg-white bg-opacity-70 absolute">
          <div className="text-gray-800 font-semibold text-lg mb-2">
            Compliance Monitoring Report (CMR)
          </div>

          <div className=" text-center bg-midgreen w-1/2  flex items-center text-white p-4 gap-4">
            <MapPin className="w-6 h-6" />
            Mandaue City, Cebu
          </div>
        </div>
      </div>
    </div>
  );
}
