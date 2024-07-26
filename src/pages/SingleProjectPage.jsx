import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { client } from "../sanity/config"
import { PortableText } from "@portabletext/react"
import { useYouTubeVideo } from "../utils/fetchVideo"



export default function SingleProjectPage() {
    const {id} = useParams()
    const [projectData , setProjectData] = useState(null)
    const { data, loading, error, getVideoDetails } = useYouTubeVideo();
    const dialogRef = useRef(null)
    const [isOpen , setIsOpen] = useState(false)

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
            
            console.log(data)

         } , [])

         const openDialog = () => {
          if (dialogRef.current) {
            dialogRef.current.showModal();
            setIsOpen(true)
          }
        };
      
        const closeDialog = () => {
          if (dialogRef.current) {
            dialogRef.current.close();
          }
        };

         if(projectData == null){
            return (
              <div className="h-[80vh] grid place-items-center">
                <div className="size-32 border-2 rounded-full border-t-accent border-l-accent animate-spin" />
              </div>
            )
         }
   const  margin =  isOpen ? "0px" : "10rem"      
  return (
    <div className="max-w-7xl mx-auto space-y-8 lg:p-0 px-8"
    style={{marginTop : margin ,}}
    >
      <div className="">
        <h1 className="text-5xl font-semibold">
        {projectData.title}
        </h1>
    </div>
    <h1 className="text-4xl font-normal">Category :  {projectData.categories[0].title}</h1>
    <div onClick={openDialog} className="lg:h-[600px]  w-full overflow-hidden rounded-xl shadow-gray-900 shadow-md">
      <img src={projectData.image.asset.url} alt="" className="h-full w-full object-cover" />
    </div>
    <dialog ref={dialogRef} className="relative w-screen h-screen pb-40 border-none">
    <img src={projectData.image.asset.url} alt="" className="w-[800px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    <button onClick={closeDialog} className="font-bold absolute top-2 right-10 border border-accent px-4 py-2 rounded-3xl ">
      X
    </button>
    </dialog>
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
    <div className="md:prose-lg lg:prose-lg prose max-w-none text-justify lg:leading-3">
      <PortableText
      value={projectData.description}
      />
    </div>
    </div>
  )
}
