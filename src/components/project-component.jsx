import { Projects } from "@/data/projects";
import { useLocation } from "react-router-dom";

export const ProjectDetails = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const urlvalue = queryParams.get("name");

  const name = Projects.find((data) => data.name === urlvalue);

  console.log(name);
  return (
    <div className="h-screen">
      <div className="h-[500px] flex items-center justify-center w-full bg-homebg bg-cover bg-center bg-fixed">
        <h1 className="text-6xl font-bold text-white">{name.name}</h1>
      </div>
      <div className="flex items-center justify-center p-24">
        <div className="w-[80%] flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1>{name.address}</h1>
            <h1>{name.application}</h1>
            <h1>{name.status.toLocaleUpperCase()}</h1>
          </div>
          <h1 className="text-xl">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </h1>
        </div>
      </div>
    </div>
  );
};
