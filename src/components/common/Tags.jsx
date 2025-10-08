import classes from './Tags.module.css'


export default function Tags({tags,setSelectedTags, selectedTags, setFilters}){

    function handleClick(e){
        const value= e.target.textContent
        setSelectedTags((oldTags)=>{
            const separator = ","
            const tags = oldTags.split(separator).filter(Boolean); // split & remove empties
            var newTags=""
            if (tags.includes(value)) {
              // remove if present
              newTags= tags.filter(v => v !== value).join(separator);
            } else {
              // add if missing
              newTags= [...tags, value].join(separator);
            }
            setFilters({filters:{tags:newTags}})
            return newTags
        })
        

    }
    return  <div className={classes.tagFilters}>
    {tags?.map(tag=><button onClick={handleClick} 
    className={selectedTags.includes(tag)? classes.active:""}>
    {tag}</button>)}
    </div>
}