import Socials from "../components/Socials";

export default function Home() {
  const productsData = [
    {
      image : 'https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg',
      name : 'Beauty brand , e-commerece'
    },
    {
      image : 'https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg',
      name : 'Beauty brand , e-commerece'
    },
    {
      image : 'https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg',
      name : 'Beauty brand , e-commerece'
    }
  ]
  return (
    <div className="overflow-hidden mt-10 relative">
      {/* HERO SECK */}
      <div className=" h-[80vh] container mx-auto flex items-center justify-center h-full ">
        <h1 className=" z-10 lg:text-5xl text-2xl min-w-0 font-semibold text-center text-accent">
          <span className="block lg:inline">Visual.</span>
          <span className="block lg:inline">Branding.</span>
          <span className="block lg:inline">Digital.</span>
        </h1>
      </div>

      {/* ABOUT SEC */}
      <div className="continer mx-auto text-center flex flex-col items-center gap-20 py-20">
        <h1 className="text-3xl text-gray-600">Who are we</h1>
        <p className="mt-4 text-3xl  font-semibold mx-10">
          A creative agency with solid expertise in <br/> Grapihcs & 3d design.
        </p>
        <button className="border border-accent p-4 rounded-full hover:bg-accent hover:text-white">
          Learn More
        </button>
      </div>

      {/* PROJECT SEC */}
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl font-semibold">Top Projects</h1>
      <div className="flex gap-20 justify-center flex-wrap">
      {
        productsData.map((item) => (
          <div key={item.name} className="size-80 bg-slate-900 mt-6 flex flex-col p-2 rounded-lg">
              <img src={item.image} alt="" className="w-full rounded-lg"/>
              <div>
               <h1 className="text-white font-semibold mt-4">{item.name}</h1>
               <button className="bg-[#3169BE] w-full h-10 rounded-lg mt-2 text-white font-semibold">
                Learn More
               </button>
              </div>
            </div>
        ))
      }
    </div>
    </div>
    
    {/* CONTACT SEC */}
    <div>
      <h1 className="text-4xl font-semibold text-center mb-6">Contact</h1>
      <div className="flex justify-center p-4">
        <button className="hover:bg-accent hover:text-white border-2 border-accent px-8 py-4 rounded-full lg:size-80 w-3/4">
          <span className="hidden lg:block text-sm"> click to</span>
          Get In Touch
        </button>
      </div>
    </div>
    {/* // FOOTER SEC */}
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
    </div>

   

  );
}
