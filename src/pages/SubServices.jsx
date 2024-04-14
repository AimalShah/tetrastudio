import {  useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPalette, faLayerGroup, faBox, faPeopleArrows, faImages,
  faCubes, faHome, faUserNinja, faPlay, faFilm,
  faBrain, faImage, faCommentAlt, faChartLine, faLock,
  faCode, faShoppingCart, faFileAlt, faLaptopCode, faTools
} from '@fortawesome/free-solid-svg-icons';
import { cardAnimationVaritent } from "./anim";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
    {
        id : 1 ,
        SubServices :  [
            {
              title: 'Logo Design',
              icon: <FontAwesomeIcon icon={faPalette} />,
              description: 'Craft unique and memorable logos that represent your brand identity.'
            },
            {
              title: 'Brand Identity Design',
              icon: <FontAwesomeIcon icon={faLayerGroup} />,
              description: 'Develop cohesive brand identities including color schemes, typography, and brand guidelines.'
            },
            {
              title: 'Packaging Design',
              icon: <FontAwesomeIcon icon={faBox} />,
              description: 'Design eye-catching packaging that stands out on shelves and attracts customers.'
            },
            {
              title: 'Poster and Flyer Design',
              icon: <FontAwesomeIcon icon={faPeopleArrows} />,
              description: 'Create visually appealing posters and flyers for events, promotions, or campaigns.'
            },
            {
              title: 'UI/UX Design',
              icon: <FontAwesomeIcon icon={faImages} />,
              description: 'Design intuitive and user-friendly interfaces for websites and applications.'
            }
          ]
    } ,
    {
        id : 2 ,
        SubServices : [
            {
              title: 'Product Modeling',
              icon: <FontAwesomeIcon icon={faCubes} />,
              description: 'Create detailed 3D models of products for visualizations and presentations.'
            },
            {
              title: 'Architectural Visualization',
              icon: <FontAwesomeIcon icon={faHome} />,
              description: 'Generate realistic 3D renderings of architectural designs and spaces.'
            },
            {
              title: 'Character Modeling',
              icon: <FontAwesomeIcon icon={faUserNinja} />,
              description: 'Design and sculpt lifelike characters for animation, games, or storytelling.'
            },
            {
              title: 'Rigging and Animation',
              icon: <FontAwesomeIcon icon={faPlay} />,
              description: 'Bring 3D models to life with rigging and animation techniques.'
            },
            {
              title: 'Simulation and Rendering',
              icon: <FontAwesomeIcon icon={faFilm} />,
              description: 'Simulate real-world physics and render high-quality animations for various purposes.'
            }
          ]
    },
    {
        id : 3 , 
        SubServices : [
            {
              title: 'Commercial Ads Video Editing',
              icon: <FontAwesomeIcon icon={faFilm} />,
              description: "Transform raw footage into compelling, polished content for today's competitive market."
            },
            {
              title: 'Wedding Video Editing',
              icon: <FontAwesomeIcon icon={faPlay} />,
              description: 'Create stunning wedding videos capturing beautiful moments and memories.'
            },
            {
              title: 'YouTube Video Editing',
              icon: <FontAwesomeIcon icon={faFilm} />,
              description: 'Edit engaging videos for YouTube channels, optimizing for audience engagement.'
            },
            {
              title: 'Documentary Editing',
              icon: <FontAwesomeIcon icon={faFilm} />,
              description: 'Craft compelling narratives through the editing of documentary films.'
            },
            {
              title: 'Short Film Editing',
              icon: <FontAwesomeIcon icon={faFilm} />,
              description: 'Edit short films, balancing storytelling and visual appeal to captivate audiences.'
            }
          ]
    },
    {
        id : 4 ,
        SubServices : [
            {
              title: 'Image Recognition',
              icon: <FontAwesomeIcon icon={faImage} />,
              description: 'Implement algorithms to identify objects, people, or places within images.'
            },
            {
              title: 'Sentiment Analysis',
              icon: <FontAwesomeIcon icon={faCommentAlt} />,
              description: 'Analyze text data to determine sentiment, opinions, and emotions expressed.'
            },
            {
              title: 'Recommendation Systems',
              icon: <FontAwesomeIcon icon={faChartLine} />,
              description: 'Develop personalized recommendation algorithms based on user preferences and behavior.'
            },
            {
              title: 'Speech Recognition',
              icon: <FontAwesomeIcon icon={faBrain} />,
              description: 'Build systems capable of transcribing and understanding human speech.'
            },
            {
              title: 'Fraud Detection',
              icon: <FontAwesomeIcon icon={faLock} />,
              description: 'Utilize AI techniques to detect and prevent fraudulent activities in various domains.'
            }
          ],
    },
    {
        id : 5 ,
        SubServices : [
            {
              title: 'Custom Website Development',
              icon: <FontAwesomeIcon icon={faCode} />,
              description: 'Create bespoke websites tailored to meet specific business requirements and goals.'
            },
            {
              title: 'E-commerce Development',
              icon: <FontAwesomeIcon icon={faShoppingCart} />,
              description: 'Build robust and scalable e-commerce platforms for online retail businesses.'
            },
            {
              title: 'Content Management System (CMS) Development',
              icon: <FontAwesomeIcon icon={faFileAlt} />,
              description: 'Develop custom CMS solutions for efficient content management and publishing.'
            },
            {
              title: 'Web Application Development',
              icon: <FontAwesomeIcon icon={faLaptopCode} />,
              description: 'Design and develop interactive web applications with rich user experiences.'
            },
            {
              title: 'Website Maintenance and Support',
              icon: <FontAwesomeIcon icon={faTools} />,
              description: 'Provide ongoing maintenance, updates, and technical support services for websites.'
            }
          ]

    }
]
const servicesDescription = [
    {
      id: 1,
      title: 'Graphics Design',
      description: "Graphics design is the art of storytelling through visuals, where every curve, color, and composition speaks a narrative. It's the fusion of creativity and strategy, crafting imagery that not only catches the eye but also resonates deeply with the audience, leaving a lasting impression."
    },
    {
      id: 2,
      title: '3D Modeling/Animation',
      description: "Step into the realm of virtual creativity where imagination knows no bounds. 3D modeling and animation transcend the constraints of reality, breathing life into dreams and concepts. It's the alchemy of digital sculpting and motion choreography, turning raw polygons into captivating worlds and characters."
    },
    {
      id: 3,
      title: 'Video Editing',
      description: "Video editing is the art of weaving moments together, transforming mere footage into cinematic journeys. It's the rhythm of storytelling, where every cut, transition, and effect dances to the beat of emotion. Through the lens of an editor, raw clips evolve into compelling narratives that captivate and inspire."
    },
    {
      id: 4,
      title: 'AI',
      description: "AI is the modern Prometheus, endowing machines with the gift of intelligence. It's the exploration of algorithms and data, unlocking the secrets of cognition and perception. From understanding human speech to mimicking creative thought, AI ventures into realms once thought exclusive to the human mind."
    },
    {
      id: 5,
      title: 'Web Development',
      description: "Web development is the art of digital architecture, where lines of code construct the pathways of tomorrow's online landscape. It's the fusion of design and functionality, creating immersive experiences that bridge the gap between users and technology. In the ever-evolving web, developers are the architects of tomorrow."
    }
  ];

function SubServices() {
    const {id} = useParams()
    const intId = parseInt(id)
    const subSer = services.filter((service) => service.id === intId)
    const content = servicesDescription.filter((service) => service.id === intId)
    console.log(content)
    const [data , setData]  = useState(subSer[0].SubServices)
    console.log(data)
    return (
<div className="min-h-[80vh]">
    <div className="container mx-auto px-4 py-10">
        {content.map((item , index) => (
            <div
            className="flex flex-col items-center mt-10 mb-40" 
            key={index}>
                <h1 className="w-full text-center text-xl font-semibold text-accent/50 mt-10 py-10">{item.title}</h1>
                <p className="w-3/4 text-center text-xl font-semibold">{item.description}</p>
            </div>
        ))}
        <h1 className="text-center text-4xl font-semibold">What do we Offer</h1>
        <div className="flex gap-20 justify-center flex-wrap mt-10 py-10">
    {
      data.map((item , index) => (
       <ServiceCard cardAnimationVaritent={cardAnimationVaritent} index={index} item={item}  key={index} hidden="true"/>
      ))
    }
    </div>
    <div className="text-center mt-6">
        <button className="text-center border-accent border p-4 rounded-full hover:bg-accent hover:text-white">
          <Link to="/projects" className="block">
            See {content[0].title} Projects
          </Link>
        </button>
    </div>
    </div>
</div> 
  )
}

export default SubServices
