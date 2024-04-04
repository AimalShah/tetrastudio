import Socials from "./Socials"

const Footer = () => {
    return (
      <div className="container mx-auto mt-6 flex items-center justify-center">
       <div className="flex flex-col lg:flex-row items-center justify-between  w-3/4 px-40">
      <div className="text-center text-lg font-semibold ">
        <span className="border-b-2 border-gray-600 text-sm">
        info@tetrastudio.net
        </span>
        <h1 className="text-xs mt-2">privacy policy</h1>
      </div>
      <div className="mt-4 lg:mt-0">
        <Socials/>
      </div>
      </div> 
    </div>
    )
  }
  
  export default Footer