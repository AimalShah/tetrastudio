import { useNavigate } from "react-router-dom"
export default function ServiceCard({index , item , hidden}) {
  const display = hidden === "true" ? "none" : "block"
  const navigate = useNavigate();

  return (
    <div
    onClick={() => navigate('/services')}
    className="h-[350px] lg:w-[500px] w-[300px] lg:overflow-hidden flex-shrink-0 flex flex-col p-2 bg-black/10 rounded "
    >
      <div className="border-b-2 mb-6">
        <h2 className="pb-4">
        0{index+1}
        </h2>
      </div>
      <div className="space-y-6">
        <h1 className="lg:text-3xl text-2xl font-medium">
          {item.title}
        </h1>
        <p className="text-start font-normal">{item.description}</p>
      </div>
    </div>
  )
}
