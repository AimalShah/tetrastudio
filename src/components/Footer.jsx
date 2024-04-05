import Socials from "./Socials"

const Footer = () => {
    return (
      <div className="container mx-auto my-12 flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row items-center justify-between  lg:w-3/4 px-40">
      <div className="text-center text-lg font-semibold ">
        <span className="border-b-2 border-gray-600 text-sm py-2">
        info@tetrastudio.net
        </span>
        <div className="mt-4">
        <Socials size={20}/>
        </div>
      </div>
      <div className="mt-4 lg:mt-0">
        <h1 className="text-sm w-full text-center mt-2 border-b-2 border-gray-600 py-2">privacy policy</h1>
        <h1 className="text-xs text-center">©Tertra Studio , Inc.</h1>
      </div>
      </div> 
    </div>
    )
  }
  
  export default Footer