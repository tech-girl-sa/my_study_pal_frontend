import classes from './Card.module.css'

function Card({children}){
    return <div className={classes.container}>
        {children}
    </div>

}

export default Card;