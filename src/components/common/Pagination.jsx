import { useSearchParams } from "react-router-dom";
import classes from './Pagination.module.css'


export default function Pagination({pagesNbr, className}){
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") || 1;
    const range = Array.from({ length: pagesNbr }, (_, i) => i + 1);

    return  <div className={`${classes.pagination} ${className}`}>
    <button className={`${classes.pageBtn} ${classes.disabled}`}>←</button>
    {range.map(index => <button className={index === page ? `${classes.pageBtn} ${classes.active}`:classes.pageBtn}>{index}</button> )}
    <button className={classes.pageBtn}>→</button>
  </div>
}