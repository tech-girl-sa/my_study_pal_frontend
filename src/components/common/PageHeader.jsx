import classes from './PageHeader.module.css'

export default function PageHeader({title,subtitle}){
    return   <div className={classes.pageHeader}>
    <h1>{title}</h1>
    <p className={classes.subtitle}>{subtitle}</p>
  </div>
}