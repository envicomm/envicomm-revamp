import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import aboutbg from "../assets/aboutbg.jpg"
import forest from "../assets/forest.png"
import homebg from "../assets/homebg.jpg"

const Projects = () => {
  return (
      <HorizontalScrollCarousel /> 
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

 
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-45%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh]">
      <div className="sticky top-0 bg-black flex flex-col h-screen items-center justify-center overflow-hidden">
        <div className="text-white py-20">
          PROJECTS
        </div>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Projects;

const cards = [
  {
    url: aboutbg,
    title: "Project 1",
    id: 1,
  },
  {
    url: forest,
    title: "Project 2",
    id: 2,
  },
  {
    url: homebg,
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];