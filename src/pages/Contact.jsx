

export default function Contact() {
  return (
    <div className="h-screen">
      <div className="container mx-auto px-8 my-20 py-10 flex justify-center">
        <div className="lg:w-3/4 lg:ps-36">
        <span className="text-lg">We are always happy to help 😇</span>
        <h1 className="text-3xl font-semibold">Get in Touch</h1>
        </div>
      </div>
      <div>
        <form action="" className="">
         <div className="container mx-auto">
          <div className="flex justify-center items-center ">
          <div className="flex flex-col gap-5 lg:w-1/2">
          <div className="flex flex-col lg:flex-row gap-8">
          <input type="text" className="border-b border-accent focus:outline-none px-2 w-full text-xs font-semibold" placeholder="Name" />
          <input type="email" className="border-b border-accent focus:outline-none px-2 w-full text-xs font-semibold"  placeholder="Email" />
          </div>
          <input type="text" className="border-b border-accent focus:outline-none px-2 text-xs font-semibold" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Body" className="border-b border-accent focus:outline-none text-xs font-semibold"></textarea>
          <button className="bg-accent text-white py-2 rounded-full">Send</button>
          </div>
          </div>
        </div> 
        </form>
      </div>
    </div>
  )
}
