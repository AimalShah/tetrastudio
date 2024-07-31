import { Link } from "react-router-dom"

const Contact = () => {
    return (
      <div>
      <h1 className="text-4xl font-semibold text-center mb-6 mt-10">Contact</h1>
      <div className="flex justify-center p-4">
        <button className="hover:bg-accent hover:text-white border-2 border-accent px-8 py-4 rounded-full lg:w-1/2 w-3/4">
        <a href="mailto:info@tetrastudio.net" className="w-full h-full block">
          Get In Touch
        </a>
        </button>
      </div>
    </div>
    )
  }
  
  export default Contact