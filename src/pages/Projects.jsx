import { useEffect, useState } from "react";
import { productsData } from "../Data/Projects";
import MobileCard from "../components/mobileProjectCard";


export default function Projects() {
  const [activeCategorie, setActiveCategorie] = useState("All");
  const [data, setData] = useState(productsData);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const selectActive = (e) => {
    setActiveCategorie(e.target.id);
  };

  useEffect(() => {
    const filtered = productsData.filter(
      (item) => item.categorie === activeCategorie
    );
    setData(filtered);
  }, [activeCategorie]);

  const categories = [
    "All",
    "Graphic Design",
    "3D Animations",
    "Video Editing",
    "AI",
    "Web Dev",
  ];
  return (
    <div className="mt-[18vh] flex flex-col gap-20">
      <div className="flex justify-center flex-col items-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((categorie, index) => (
            <button
              className="text-sm min-w-20 p-2 mx-2 border border-accent rounded-full"
              key={index}
              id={categorie}
              onClick={selectActive}
              style={{
                backgroundColor:
                  activeCategorie === categorie ? "black" : "white",
                color: activeCategorie === categorie ? "white" : "",
              }}
            >
              {categorie}
            </button>
          ))}
        </div>
      </div>
          <div
          className="flex flex-wrap gap-4 justify-center">
            {
              data[0].projects.map((project , index) => (
               <MobileCard project={project} index={index} key={index} />
              ))
            }
          </div>
    </div>
  );
}
