import { useNavigate } from "react-router-dom"
export default function MobileCard({project , index , key}){
  const navigate = useNavigate();
    return(
        <div className="lg:w-96 w-72 space-y-4 p-2">
        <img src={project.image.asset.url} alt="" className="w-72 h-52 object-cover"/>
        <p>{project.title}</p>
        <button 
        className="py-2 px-4 rounded-full border-accent border hover:bg-accent hover:text-white"
        onClick={() => navigate(`/projects/${project.slug.current}`)}
        >
          Details
        </button>
      </div>
    )
}