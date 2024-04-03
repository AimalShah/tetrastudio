import Socials from "./Socials"

const Footer = () => {
    return (
      <div className="container mx-auto my-6">
      <div className="text-center text-lg font-semibold ">
        <span className="p-2 border-b-2 border-gray-600">
        info@tetrastudio.com
        </span>
        <h1 className="text-xs mt-4">privacy policy</h1>
      <div className="mt-4">
        <Socials/>
      </div>
      </div>
    </div>
    )
  }
  
  export default Footer