
import classes from './Section.module.css';
import { FaBook, FaCopy, FaFolderOpen, FaUpload } from "react-icons/fa";
const icons = {
    book: FaBook,
    copy: FaCopy,
    folder: FaFolderOpen,
    upload: FaUpload,
  };

export default function Section({children, icon, title}){
    const Icon = icons[icon];
    
    return  <section className={classes.sectionBlock} >
     <div className={classes.sectionHeader} >
       <h3><Icon className={classes.icon} /> {title}</h3>
       <a href="#">View all</a>
     </div>
  
     {children}
 
   </section>
 }