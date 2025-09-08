import RoundBlueButton from "./RoundBlueButton"
import { FaPlus, FaSearch } from "react-icons/fa";
import classes from './Filters.module.css'
import Tags from "./Tags";


export default function Filters({tags,placeholder,filterChoices}){

    return  <>
    <div className={classes.controls}>
      <div className={classes.searchBar}>
        <input type="text" placeholder={placeholder}/>
        <FaSearch className={classes.icon}/>
      </div>
  
      <select className={classes.filterDropdown}>
        {filterChoices.map(choice=><option value={choice.key}>{choice.label}</option>)}
      </select>
  
      <select className={classes.sortDropdown}>
        <option value="">Sort by</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
  
      <RoundBlueButton>
      <FaPlus /> Create New Subject
      </RoundBlueButton>
    </div>

      <Tags tags={tags}/>
  </>
}