import { useEffect, useState } from "react";
import MobileCard from "../components/mobileProjectCard";
import { client } from "../sanity/config";
import useStore from "../store/store";
import { data } from "autoprefixer";

export default function Projects() {
  const [activeCategorie , setActiveCategorie] = useState("All")
    const [Data, setData] = useState([]);
  const [isLoading, setISLoading] = useState(true);
  const [projects , setProjects] = useState([])
const fetchData = () => {
  client.fetch(
    `*[_type == "project"] {slug , title , image {
    asset -> {url}
  } , 
    categories[] -> {
      title
    }
  }`
  ).then((res) => {
    setProjects(res)
    setData(res)
  }).catch((e) => console.log(e))
  .finally(() => setISLoading(false))
}
useEffect(() => {
  fetchData();
  console.log(projects)
}, []);


console.log(Data)



  const selectActive = (e) => {
    const {id} =  e.target;    

    setActiveCategorie(id);
    if(id === "All"){
      setISLoading(true)
      fetchData()
    }

    const filterd = projects.filter((project) => project.categories[0].title === id)
    setData(filterd)
  };

  const categories = [
    "All",
    "Graphic Design",
    "3D Animations",
    "3D Modeling & Rendering",
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
        <h1 className="text-5xl font-semibold">Projects</h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {isLoading ? (
          <div className="size-32 border-2 rounded-full border-t-accent border-l-accent animate-spin" />
        )
        : Data.length === 0 ? "Not Projects Avaliable" : (
          Data.map((project, index) => (
            <MobileCard project={project} index={index} />
          ))
        )}
      </div>
    </div>
  );
}
