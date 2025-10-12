import RoundBlueButton from "./RoundBlueButton"
import { FaPlus, FaSearch } from "react-icons/fa";
import classes from './Filters.module.css'
import Tags from "./Tags";
import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Filters({tags,placeholder,filterChoices,buttonText, setFilters, filters,path}){
  const [selectedTags, setSelectedTags] = useState("")
  
  function handleChange(updatedState) {
   
    if (filters in updatedState){
      setFilters?.((oldState) => ({...oldState,filters:{...oldState.filters,...updatedState.filters}}));
    }else{
    setFilters?.((oldState) => ({...oldState,...updatedState}));
    }
  }

  function handleSearch(e) {
    const value = e.target.value;
    handleChange({ search: value });
  }

  function handleOrdering(e) {
    const value = e.target.value;
    handleChange({ ordering: value });
  }

  function handleSelectFilter(e,filterKey){
    const value = e.target.value;
    handleChange({filters:{[filterKey]:value}})
  }

    return  <>
    <div className={classes.controls}>
      <div className={classes.searchBar}>
        <input type="text" placeholder={placeholder} value={filters.search} onChange={handleSearch}/>
        <FaSearch className={classes.icon}/>
      </div>
   {filterChoices.map(filter=>
      <select className={classes.filterDropdown} 
      onChange={(e)=>handleSelectFilter(e,filter.filterKey)}
      value={filters.filters[filter.key]}>
        {filter.filterChoices?.map(choice=><option value={choice.key}>{choice.label}</option>)}
      </select>)}
  
      <select className={classes.sortDropdown} onChange={handleOrdering} value={filters.ordering}>
        <option value="">Sort by</option>
        <option value="-created_at">Newest</option>
        <option value="created_at">Oldest</option>
        <option value="title">A-Z</option>
        <option value="-title">Z-A</option>
      </select>
      {buttonText?
      <RoundBlueButton>
      <FaPlus /> <NavLink to={path}>{buttonText}</NavLink>
      </RoundBlueButton>: ""}
    </div>

      <Tags tags={tags} 
      setSelectedTags={setSelectedTags} 
      selectedTags={selectedTags}
      setFilters={handleChange}
      />
  </>
}