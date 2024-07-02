import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { client } from "../sanity/config"
import { PortableText } from "@portabletext/react"
import { useYouTubeVideo } from "../utils/fetchVideo"



export default function SingleProjectPage() {
    const {id} = useParams()
    const [projectData , setProjectData] = useState(null)
    const { data, loading, error, getVideoDetails } = useYouTubeVideo();
    useEffect(() => {
        client.fetch(`*[_type == "project" && slug.current == "${id}"][0] {title , description  , image {
            asset -> {
            url}}
            , categories[] -> {
            title 
            },
            YoutubeUrl
            }`)
        .then((data) => {
            setProjectData(data)
            const url = data.YoutubeUrl;
            if (url) {
                getVideoDetails(url);
            } else {
                throw new Error("YouTube URL not found");
            }
        })
        .catch(err => console.log(err))
       

         } , [])

         if(projectData == null){
            return (
                <div>Loading...</div>
            )
         }
  return (
    <div className="max-w-7xl mx-auto lg:mt-40 mt-20 space-y-8 lg:p-0 px-8">
      <div className="">
        <h1 className="text-5xl font-semibold">
        {projectData.title}
        </h1>
    </div>
    <h1 className="text-4xl font-normal">Category :  {projectData.categories[0].title}</h1>
   
    <div className="lg:h-[600px]  w-full overflow-hidden rounded-xl shadow-gray-900 shadow-md">
      <img src={projectData.image.asset.url} alt="" className="h-full w-full object-cover " />
    </div>
    <div className="md:prose-lg lg:prose-2xl prose max-w-none text-justify">
      <PortableText
      value={projectData.description}
      />
    </div>
    <div className="relative pb-9/16">
                {data && (
                    <iframe
                    className="w-full mb-10 z-0"
                        width="1200"
                        height="400"
                        src={`https://www.youtube.com/embed/${data.id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
    </div>
  )
}
