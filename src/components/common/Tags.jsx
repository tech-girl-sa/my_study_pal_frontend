import classes from './Tags.module.css'


export default function Tags({tags}){
    return  <div className={classes.tagFilters}>
    {tags.map(tag=><button>{tag.label}</button>)}
    </div>
}