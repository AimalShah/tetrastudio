import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Msg = ({sent}) => {
  if(sent){
    return "Message Send Successfully"
  }

  if(sent === null) {
    return "Send"
  }

  if(sent === false) {
    return "Error! Please Try again"
  }
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false)
  const [sent , setSent] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const serviceID = "service_gdliph7";
    const templateId = "template_eqsf8ah";
    const publicKey = "zWXjZk0OgDaziKelI";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tetra Studio",
      message: body,
    };

    emailjs
      .send(serviceID, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setBody("");
        setLoading(false);
        setSent(true)
      })
      .catch((error) => {
        console.error("Error sending email", error);
        setLoading(false);
        setSent(false)
      });
  };

  return (
    <div className="h-screen">
      <div className="container mx-auto px-8 my-20 py-10 flex justify-center">
        <div className="lg:w-3/4 lg:ps-36">
          <span className="text-lg">We are always happy to help!</span>
          <h1 className="text-3xl font-semibold">Get in Touch</h1>
        </div>
      </div>
      <div>
        <form className="" onSubmit={handleSubmit}>
          <div className="container mx-auto">
            <div className="flex justify-center items-center ">
              <div className="flex flex-col gap-5 lg:w-1/2">
                <div className="flex flex-col lg:flex-row gap-8">
                  <input
                    type="text"
                    className="border-b border-accent focus:outline-none px-2 w-full text-xs font-semibold bg-whitesh"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    className="border-b border-accent focus:outline-none px-2 w-full text-xs font-semibold bg-whitesh"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="border-b px-2 border-accent focus:outline-none text-xs font-semibold bg-whitesh" 
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-accent text-white py-2 rounded-full flex justify-center"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-y-2 border-white p-4 border-s-2 rounded-full border-r-2 border-r-gray-500 animate-spin "></div>
                  ) : (
                    <Msg sent={sent} />
                  )}
                </button>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
