import { useState } from "react";
import ProjectCard from "../ProjectCard";
import Modal from "../modal/modal";
import { Link } from "react-router-dom";
import MobileCard from "../mobileProjectCard";


export const Projects = ({ productsData }) => {
    const [modal, setModal] = useState({ active: false, index: 0 });
    return (
      <div className="">
        <h1 className="text-center text-4xl font-semibold ">Top Projects</h1>
        <div className="lg:flex hidden h-screen items-center justify-center">
          <div className={"w-[1400px] flex flex-col items-center justify-center"}>
            {productsData.map((project, index) => {
              return (
                <ProjectCard
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  key={index}
                  slug={project.slug.current}
                  category={project.categories[0].title}
                />
              );
            })}
          </div>
          <Modal modal={modal} projects={productsData} />
        </div>

        <div className="lg:hidden flex flex-wrap justify-center mt-10">
          {
            productsData.map((project , index) => (
              <MobileCard project={project} index={index} key={index} />
            ))
          }
        </div>
        <div className="text-center">
            <Link to="/projects">
            <button className="lg:px-4 lg:py-6 p-2 lg:w-48 hover:bg-accent hover:text-white border border-accent mt-10 rounded-full">
            Show More
            </button>
            </Link>
        </div>
      </div>
    );
  };

