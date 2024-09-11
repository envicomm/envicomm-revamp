import { Projects } from "@/data/projects";
import { useLocation } from "react-router-dom";

export const ProjectDetails = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const urlvalue = queryParams.get("name");

  const name = Projects.find((data) => data.name === urlvalue);

  console.log(name);
  return (
    <div className="h-screen w-screen pb-8">
      <div className="h-[500px]  p-4 flex items-center justify-center w-full bg-homebg bg-cover bg-center bg-fixed">
        <h1 className="text-4xl text-center lg:text-left lg:text-6xl  font-bold text-white">{name.name}</h1>
      </div>
      <div className="flex items-center justify-center lg:p-24 ">
        <div className="p-12  lg:p-0 lg:w-[80%] flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1>{name.address}</h1>
            <h1>{name.application}</h1>
            <h1>{name.status.toLocaleUpperCase()}</h1>
          </div>
          <h1 className="text-xl">
           {name.description}
          </h1>
        </div>
      </div>
    </div>
  );
};
