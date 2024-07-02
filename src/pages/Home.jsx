import { motion , useScroll, useTransform} from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCube,
  faVideo,
  faBrain,
  faCode,
  faLanguage,
  faFileAudio,
  faDatabase,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import "../utils/Blob.css";
import Contact from "../components/Contact";
import SwipeCarousel from "../components/Testimonial";
import Hero from "../components/home/Hero";
import About from "../components/home/about";
import Serives from "../components/home/services";
import { Projects } from "../components/home/Projects";
import { useEffect, useState } from "react";
import { client } from "../sanity/config";
import { data } from "autoprefixer";


export default function Home() {
    const [Data , setData] = useState([])


  useEffect(() => {
    client.fetch(`*[_type == "project"] { slug ,  title , image {
  asset -> {
    url
  }
} , 
  categories[] -> {
    title
  }
}`)
    .then((data) => {
      setData(data.splice(0 , 4))
      console.log(data)
    })    
    .catch(err => console.log(err))
  } , [])


  const services = [
    {
      title: "Graphics Design",
      icon: <FontAwesomeIcon icon={faPaintBrush} />,
      description:
        "Graphics design involves creating visual content to communicate messages. It includes various elements such as typography, illustration, and photography to convey ideas effectively.",
    },
    {
      title: "3D Modeling/Animation",
      icon: <FontAwesomeIcon icon={faCube} />,
      description:
        "3D modeling is the process of creating three-dimensional representations of objects. Animation involves bringing these models to life by simulating movement and interaction.",
    },
    {
      title: "Video Editing",
      icon: <FontAwesomeIcon icon={faVideo} />,
      description:
        "Video editing is the manipulation and arrangement of video shots to create a new work. It involves cutting, trimming, adding effects, and other post-production tasks.",
    },
    {
      title: "AI",
      icon: <FontAwesomeIcon icon={faBrain} />,
      description:
        "Artificial Intelligence (AI) involves creating systems that can perform tasks that normally require human intelligence. This includes problem-solving, understanding natural language, and recognizing patterns.",
    },
    {
      title: "Web Development",
      icon: <FontAwesomeIcon icon={faCode} />,
      description:
        "Web development encompasses building and maintaining websites and web applications. It involves various technologies such as HTML, CSS, JavaScript, and frameworks like React or Angular.",
    },
    {
      title: "Translations",
      description:
        "Efficient and accurate translation services to bridge language barriers and reach global audiences.",
      icon: <FontAwesomeIcon icon={faLanguage} />, // Entire Font Awesome icon element
    },
    {
      title: "Transcription",
      description:
        "Transform audio and video content into text format with precision and speed.",
      icon: <FontAwesomeIcon icon={faFileAudio} />, // Entire Font Awesome icon element
    },
    {
      title: "Data Collection",
      description:
        "Gather, organize, and curate data from various sources to fuel insights and decision-making.",
      icon: <FontAwesomeIcon icon={faDatabase} />, // Entire Font Awesome icon element
    },
    {
      title: "Data Annotation",
      description:
        "Enhance machine learning algorithms by labeling and annotating data with accuracy and consistency.",
      icon: <FontAwesomeIcon icon={faPuzzlePiece} />, // Entire Font Awesome icon element
    },
  ];

  return (
    <div className="relative">
      <Hero />
      <About />
      <Serives services={services} />
      <Projects productsData={Data} />

      <div>
        <h1 className="text-4xl font-semibold text-center mt-20 mb-10">
          What Clients says about us
        </h1>
        <SwipeCarousel />
      </div>

      <Contact />
    </div>
  );
}






