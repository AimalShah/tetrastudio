import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./style.css"
import { useNavigate } from 'react-router-dom';


export default function ProjectCard({slug, index, title, setModal , category}) {
  const arr = [1,2,3,4,5]
  const navigate = useNavigate();
  return (
    <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={"project"}
    onClick={() => navigate(`/projects/${slug}`)}
    >
    <h2>{title}</h2>
    <p>{category}</p>
</div>
  );
}
