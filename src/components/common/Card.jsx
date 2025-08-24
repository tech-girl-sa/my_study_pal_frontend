import classes from './Card.module.css'

function Card({children}){
    return <div class={classes.container}>
        {children}
    </div>

}

export default Card;