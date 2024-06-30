import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./style.css"
import { useNavigate } from 'react-router-dom';


export default function ProjectCard({index, title, setModal}) {
  const arr = [1,2,3,4,5]
  const navigate = useNavigate();
  return (
    <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={"project"}
    onClick={() => navigate("/projects")}
    >
    <h2>{title}</h2>
    <p>Design & Development</p>
</div>
  );
}
