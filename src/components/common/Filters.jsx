import RoundBlueButton from "./RoundBlueButton"
import { FaPlus, FaSearch } from "react-icons/fa";
import classes from './Filters.module.css'
import Tags from "./Tags";


export default function Filters({tags,placeholder,filterChoices,buttonText}){

    return  <>
    <div className={classes.controls}>
      <div className={classes.searchBar}>
        <input type="text" placeholder={placeholder}/>
        <FaSearch className={classes.icon}/>
      </div>
   {filterChoices.map(filter=>
      <select className={classes.filterDropdown}>
        {filter.map(choice=><option value={choice.key}>{choice.label}</option>)}
      </select>)}
  
      <select className={classes.sortDropdown}>
        <option value="">Sort by</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
      {buttonText?
      <RoundBlueButton>
      <FaPlus /> {buttonText}
      </RoundBlueButton>: ""}
    </div>

      <Tags tags={tags}/>
  </>
}