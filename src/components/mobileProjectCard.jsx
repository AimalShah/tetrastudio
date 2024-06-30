export default function MobileCard({project , index , key}){
    return(
        <div key={index} className="lg:w-96 w-72 space-y-4 p-2">
        <img src={project.src} alt="" className="w-full object-cover"/>
        <p>{project.title}</p>
        <button className="py-2 px-4 rounded-full border-accent border hover:bg-accent hover:text-white">
          Details
        </button>
      </div>
    )
}